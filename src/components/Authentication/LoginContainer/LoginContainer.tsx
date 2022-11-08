import React, { useState } from "react";
import styles from "./LoginContainer.module.scss";
import { Formik, Form, Field } from "formik";
import FormInput from "../../common/Form/InputComponents/FormInput/FormInput";
import { Link, Redirect, useHistory } from "react-router-dom";
import { LoginSchema } from "../../../core/validations/login.validation";
import loginBG1 from "../../../assets/img/pages/register/login.png";
import loginBG2 from "../../../assets/img/pages/register/login2.png";
import email from "../../../assets/img/icons/email.svg";
import email2 from "../../../assets/img/icons/email2.svg";
import email3 from "../../../assets/img/icons/email3.svg";
import password from "../../../assets/img/icons/password.svg";
import password2 from "../../../assets/img/icons/password2.svg";
import password3 from "../../../assets/img/icons/password3.svg";
import { useLogin } from "../../../core/services/api/authentication.api";
import PrimaryButton from "../../common/Buttons/PrimaryButton/PrimaryButton";
import { showToast } from "../../../core/utils";
import { ToastTypes } from "../../../core/enums";
import { useUserAuth } from "../../../core/utils/context/AuthenticationContext";
import { login } from "../../../core/services/authentication/authentication.service";
import jwt_decode from "jwt-decode";
import OutLineButton from "../../common/Buttons/OutLineButton/OutLineButton";

export interface IPropTypes {}

interface ILoginValues {
  email: string;
  password: string;
}

const LoginContainer: React.FC<IPropTypes> = ({}) => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const history = useHistory();

  const loginMutation = useLogin();

  const { token, setTokenState, setUserClaimState, role, setRoleState } =
    useUserAuth();

  const onSubmit = (data: ILoginValues) => {
    const obj = {
      emailOrUsername: data.email,
      password: data.password,
    };
    loginMutation.mutate(obj, {
      onSuccess: (val) => {
        const accessToken: string = val.data.result.accessToken;
        const refreshToken: string = val.data.result.refreshToken;
        var decoded: any = jwt_decode(accessToken);
        let decodedRoles: any = "";

        if (
          typeof decoded[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ] === "string"
        ) {
          decodedRoles = [
            decoded[
              "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
            ],
          ];
          console.log(decodedRoles);
        }
        setRoleState(decodedRoles);
        // login(accessToken, refreshToken, decodedRoles );
        setTokenState(accessToken);
        showToast(["با موفقیت وارد شدید."], ToastTypes.success);
        // history.push("/Dashboard");
      },
    });
  };

  if (token && role && role.length > 0) {
    return <Redirect to="/Dashboard" />;
  }

  return (
    <div className={`${styles.mainContainer} row`}>
      <div className={`${styles.rightBox} col-md-7`}>
        <Link to="/">
          <span className={styles.link}>&#8249; صفحه اصلی</span>
        </Link>

        <img
          className={`${styles.backgroundImage} d-none d-md-block`}
          src={loginBG1}
          alt="Register Background"
        />
        <img
          className={`${styles.backgroundImage} d-block d-md-none`}
          src={loginBG2}
          alt="Register Background"
        />
      </div>
      <div className={`${styles.leftBox} col-md-5`}>
        <div className={styles.loginBox}>
          <h3 className={styles.title}>ورود</h3>
          <span className={styles.welcome}>خوشحالیم که برگشتید.</span>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={onSubmit}
            validationSchema={LoginSchema}
          >
            {({ errors, touched, values }) => (
              <Form>
                <FormInput
                  label="ایمیل یا نام کاربری"
                  name="email"
                  icon={email}
                  iconResponsive={email2}
                  withValueIcon={email3}
                  placeholder="لطفا ایمیل خود را وارد کنید."
                  error={errors.email}
                  touched={touched.email}
                  value={values.email}
                />

                <FormInput
                  label="رمز عبور"
                  name="password"
                  icon={password}
                  iconResponsive={password2}
                  withValueIcon={password3}
                  type="password"
                  placeholder="لطفا رمز عبور خود را وارد کنید."
                  error={errors.password}
                  touched={touched.password}
                  value={values.password}
                />
                <div className={styles.rememberForget}>
                  <span>رمز خود را فراموش کردید؟</span>
                  {/* <span>
                    <input
                      className={styles.remember}
                      type="checkbox"
                      checked={rememberMe}
                      onClick={() => setRememberMe(!rememberMe)}
                    />
                    <span>مرا به خاطر بسپار</span>
                  </span> */}
                </div>

                <div className={styles.buttonHolder}>
                  <PrimaryButton
                    text="ورود"
                    isLoading={loginMutation.isLoading}
                    style={{ marginLeft: "30px" }}
                  />
                  <OutLineButton
                    text="ثبت نام"
                    onClick={() => {
                      history.push("/Register");
                    }}
                    type="button"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export { LoginContainer };

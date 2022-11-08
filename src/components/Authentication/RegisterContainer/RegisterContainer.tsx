import React from "react";
// import '../../../assets/scss/pages/register.scss'
import Style from "./register.module.scss";
import { ChevronLeft } from "react-feather";
import { Formik, Form } from "formik";
import { registerValidation } from "../../../core/validations/register-validation";
import FormInput from "../../common/Form/InputComponents/FormInput/FormInput";
import password from "../../../assets/img/icons/password.svg";
import user from "../../../assets/img/icons/user.png";
import { Link, useHistory } from "react-router-dom";
import PrimaryButton from "../../common/Buttons/PrimaryButton/PrimaryButton";
import OutLineButton from "../../common/Buttons/OutLineButton/OutLineButton";
import {
  IRegister,
  useRegister,
} from "../../../core/services/api/authentication.api";
import { showToast } from "../../../core/utils";
import { ToastTypes } from "../../../core/enums";
import Message from "./Message/Message";

interface MyFormValues {
  nationalId: string;
  phoneNumber: string;
  password: string;
  passwordRepeat: string;
}
export interface IPropTypes {}

const RegisterContainer: React.FC = () => {
  const history = useHistory<any>();
  const registerMutation = useRegister();
  const initialValues: MyFormValues = {
    nationalId: "",
    phoneNumber: "",
    password: "",
    passwordRepeat: "",
  };

  const onSubmit = (values: MyFormValues) => {
    const obj: IRegister = {
      nationalCode: values.nationalId,
      cellphone: values.phoneNumber,
    };

    registerMutation.mutate(obj, {
      onSuccess: (val: any) => {
        showToast(["ثبت نام با موفقیت انجام شد"], ToastTypes.success);
        history.push({
          pathname: "/register/code",
          state: {
            cellphone: values.phoneNumber,
            nationalCode: values.nationalId,
          },
        });
      },
      onError: (error) => {
        console.log("error", error);
      },
    });
  };

  // const messages = [
  //   { text: "پیام یک" },
  //   { text: "پیام دو" },
  //   { text: "پیام سه" },
  //   { text: "پیام چهار" },
  //   { text: "پیام پنج" },
  // ];

  return (
    <div className={Style.Container}>
      <div
        className={
          "row flex-column-reverse flex-lg-row " + Style.innerContainer
        }
      >
        <div
          className={
            "col-lg-6 d-flex flex-column justify-content-center align-items-center " +
            Style.rightBox
          }
        >
          <div className={Style.logoHolder}>
            <span className={Style.logo}></span>
            <span className={Style.logoText}></span>
          </div>
          <h1 className="text-white fs-2">
            به سامانه پایش حمل و نقل دانش آموزی خوش آمدید!
          </h1>
          {/* {messages.map((msg) => {
            return <Message text={msg.text} />;
          })} */}
          <p className={Style.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis rem, facere esse deserunt, perferendis consequatur
            repellendus accusantium nesciunt fugiat aliquam ea excepturi
            cupiditate ducimus suscipit quo. Voluptate doloremque optio quas!
          </p>
        </div>
        <div
          className={
            "col-lg-6 d-flex flex-column justify-content-center align-items-center " +
            Style.RegisterPageHolder
          }
        >
          <p>
            <Link to="/" style={{ color: "black" }}>
              صفحه اصلی <ChevronLeft color="black" size="24" />
            </Link>
          </p>
          <section className={Style.RegisterFormHolder}>
            <div className={Style.GlassForm}>
              <h3>ثبت نام در سپند</h3>
              <Formik
                initialValues={initialValues}
                validationSchema={registerValidation}
                onSubmit={onSubmit}
              >
                {({ errors, touched, values }) => {
                  return (
                    <Form className={Style.formPartHolder}>
                      <FormInput
                        label="کد ملی"
                        name="nationalId"
                        icon={user}
                        iconResponsive={user}
                        withValueIcon={user}
                        error={errors.nationalId}
                        touched={touched.nationalId}
                        value={values.nationalId}
                      />
                      <FormInput
                        label="شماره همراه"
                        name="phoneNumber"
                        icon={user}
                        iconResponsive={user}
                        withValueIcon={user}
                        error={errors.phoneNumber}
                        touched={touched.phoneNumber}
                        value={values.phoneNumber}
                      />

                      {/* recaptcha */}
                      <div className={Style.BTNHolder}>
                        <PrimaryButton
                          text="ثبت نام"
                          isLoading={registerMutation.isLoading}
                          style={{
                            padding: "15px 40px",
                            width: "100%",
                          }}
                          type="submit"
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        {/* <Link
                        to="/"
                        style={{
                          color: "rgb(92, 20, 73)",
                          textDecorationColor: "rgb(92, 20, 73)",
                          textDecorationLine: "underline",
                          textDecorationStyle: "solid",
                        }}
                      >
                        فراموشی رمز عبور
                      </Link> */}
                        {/* <Link
                        to="/"
                        style={{
                          color: "rgb(92, 20, 73)",
                          textDecorationColor: "rgb(92, 20, 73)",
                          textDecorationLine: "underline",
                          textDecorationStyle: "solid",
                        }}
                      >
                        ثبت نام در سپند
                      </Link> */}
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </section>
          {/* <div className={Style.RegisterSvgHolder}></div> */}
        </div>
      </div>
    </div>
  );
};

export { RegisterContainer };

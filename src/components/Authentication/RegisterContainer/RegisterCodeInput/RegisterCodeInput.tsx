import React, { useState, FC } from "react";
import Style from "./registerCodeInput.module.scss";
import FormInput from "./../../../common/Form/InputComponents/FormInput/FormInput";
import icon from "../../../../assets/img/icons/password3.svg";
import { RegisterCodeInputValidation } from "../../../../core/validations/registerCodeInput.validation";
import { Formik, Form } from "formik";
import PrimaryButton from "./../../../common/Buttons/PrimaryButton/PrimaryButton";
import { Link, useHistory } from "react-router-dom";
import ReactCodeInput from "react-verification-code-input";
import { useLocation } from "react-router-dom";
import {
  useConfirm,
  IConfirmCode,
} from "../../../../core/services/api/confirmationCode.api";
import { showToast } from "../../../../core/utils";
import { ToastTypes } from "../../../../core/enums";
import { AxiosResponse } from "axios";

interface IPropTypes {}
const RegisterCodeInput: FC<IPropTypes> = ({}: IPropTypes) => {
  const [code, setCode] = useState<string>("");
  const confirmMutation = useConfirm();
  const location: any = useLocation();

  const history = useHistory<any>();

  const onSubmit = () => {
    if (code.length !== 6)
      return showToast(["کد وارد شده صحیح نیست"], ToastTypes.error);
    const cellphone: string = location.state.cellphone;
    const obj: IConfirmCode = {
      cellphone: cellphone,
      verificationCode: code,
    };
    confirmMutation.mutate(obj, {
      onSuccess: (value) => {
        console.log(value);
        history.push({
          pathname: "/register/CompleteProfile",
          state: {
            cellphone: location.state.cellphone,
            nationalCode: location.state.nationalCode,
            securityStamp: value.data.result,
          },
        });
      },
      onError: () => {},
    });
  };
  return (
    <div className={"flex-column-reverse flex-lg-row  " + Style.container}>
      <div
        className={
          "col-lg-6 d-flex flex-column justify-content-center align-items-center " +
          Style.rightBox
        }
      >
        <div className={Style.boxHolder}>
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
      </div>
      <div
        className={
          "col-lg-6 d-flex flex-column justify-content-center align-items-center " +
          Style.leftBox
        }
      >
        <div className={Style.form}>
          <h3>کد ثبت نام</h3>
          <p>لطفا کد ثبت نام ارسال شده را وارد کنید.</p>
          <span className="mt-3 d-block">شماره همراه شما 09301530240</span>
          <ReactCodeInput
            type="number"
            fields={6}
            onChange={(value) => setCode(value)}
            fieldWidth={60}
            fieldHeight={60}
            className={"my-3 " + Style.codeInput}
          />
          {/* <Formik
            initialValues={initialValues}
            validationSchema={RegisterCodeInputValidation}
            onSubmit={onSubmit}
          >
            {({ errors, touched, values }) => (
              <Form className={Style.formPartHolder}>
                <FormInput
                  icon={icon}
                  name="code"
                  label=""
                  value={values.code}
                  withValueIcon={icon}
                  iconResponsive={icon}
                  placeholder="کد را وارد کنید..."
                  touched={touched.code}
                  error={errors.code}
                />
              </Form>
            )}
          </Formik> */}
          <PrimaryButton
            text="ثبت"
            onClick={onSubmit}
            type="submit"
            style={{ width: "90%", margin: "0 auto", borderRadius: "3px" }}
          />
          <div className="d-flex justify-content-between align-items-center mt-2">
            <Link
              to="/"
              style={{
                color: "rgb(92, 20, 73)",
                textDecorationColor: "rgb(92, 20, 73)",
                textDecorationLine: "underline",
                textDecorationStyle: "solid",
              }}
            >
              اصلاح شماره همراه
            </Link>
            <Link
              to="/"
              style={{
                color: "rgb(92, 20, 73)",
                textDecorationColor: "rgb(92, 20, 73)",
                textDecorationLine: "underline",
                textDecorationStyle: "solid",
              }}
            >
              انصراف
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterCodeInput;

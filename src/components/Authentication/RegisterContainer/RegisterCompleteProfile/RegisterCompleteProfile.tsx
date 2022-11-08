import React, { useState, useEffect, FC } from "react";
import Style from "./RegisterCompleteProfile.module.scss";
import FormInput from "../../../common/Form/InputComponents/FormInput/FormInput";
import icon from "../../../../assets/img/icons/password3.svg";
import { RegisterCodeInputValidation } from "../../../../core/validations/registerCodeInput.validation";
import { Formik, Form, FormikProps } from "formik";
import PrimaryButton from "../../../common/Buttons/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import ReactCodeInput from "react-verification-code-input";
import { useLocation } from "react-router-dom";
import user from "../../../../assets/img/icons/user.png";
import {
  useConfirm,
  IConfirmCode,
} from "../../../../core/services/api/confirmationCode.api";
import { showToast } from "../../../../core/utils";
import { ToastTypes } from "../../../../core/enums";
import { AxiosResponse } from "axios";
import {
  ICompleteProfile,
  useRegisterUserReal,
} from "../../../../core/services/api/authentication.api";
import { ModernDatePicker } from "../../../common/Form";
import BasicSelectOption from "../../../common/Form/SelectOptionComponent/BasicSelectOption/BasicSelectOption";
import { DutySystemStatusData } from "../../../../core/data/duty-system-status.data";
import { EducationStatusData } from "../../../../core/data/education-status.data";
import { GenderStatusData } from "../../../../core/data/gender.data";
import { MaritalStatusData } from "../../../../core/data/marital-status.data";
import { useGetProvinces } from "./../../../../core/services/api/provinces.api";
import { useGetCounty } from "./../../../../core/services/api/county.api";
import { useGetCityOrVillage } from "./../../../../core/services/api/cityOrVillage.api";
import { Spinner } from "reactstrap";

interface IPropTypes {}

interface IProvinceType {
  id: number;
  title: string;
}
interface ICountyType {
  id: number;
  title: string;
}
interface ICityOrVillageType {
  id: number;
  title: string;
}

const RegisterCompleteProfile: FC<IPropTypes> = ({}: IPropTypes) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [provinces, setProvinces] = useState<IProvinceType[]>();
  const [counties, setCounties] = useState<ICountyType[]>();
  const [cityOrVillage, setCityOrVillage] = useState<ICityOrVillageType[]>();
  const confirmMutation = useConfirm();
  const getProvinces = useGetProvinces();
  const getCounty = useGetCounty();
  const getCityOrVillage = useGetCityOrVillage();
  const location = useLocation<any>();
  const [initialValues, setInitialValues] = useState<ICompleteProfile>({
    username: location.state.nationalCode,
    name: "",
    lastName: "",
    fatherName: null,
    birthCertificatId: null,
    birthCertificatIssuedBy: null,
    birthDateAsShamsi: null,
    mobileNumber2: null,
    phoneNumber: location.state.cellphone,
    phoneNumber2: null,
    faxNumber: null,
    faxNumber2: null,
    maritalStatus: null,
    gender: null,
    educationStatus: null,
    dutySystemStatus: null,
    password: "",
    email: null,
    // securityStamp: location.state.securityStamp,
    cityOrVillageId: null,
  });
  const completeRegisterMutation = useRegisterUserReal();

  useEffect(() => {
    console.log(location);
    getProvinces.mutate(undefined, {
      onSuccess: (value) => {
        const mappedProvinces = value.data.result.map(
          (value: IProvinceType) => ({
            value: value.id,
            label: value.title,
          })
        );
        setProvinces(mappedProvinces);
        setLoading(false);
      },
      onError: (v) => {
        console.log(v);
      },
    });
  }, []);

  const onProvinceChange = (value: any) => {
    if (typeof value.value == "number" && typeof value.label == "string") {
      getCounty.mutate(value.value, {
        onSuccess: (value) => {
          const mappedCounties = value.data.result.map(
            (value: ICountyType) => ({
              value: value.id,
              label: value.title,
            })
          );
          setCounties(mappedCounties);
        },
      });
    }
  };
  const onCountyChange = (value: any) => {
    if (typeof value.value == "number" && typeof value.label == "string") {
      getCityOrVillage.mutate(value.value, {
        onSuccess: (value) => {
          const mappedCityOrVillage = value.data.result.map(
            (value: ICountyType) => ({
              value: value.id,
              label: value.title,
            })
          );
          setCityOrVillage(mappedCityOrVillage);
        },
      });
    }
  };

  const onSubmit = (values: ICompleteProfile) => {
    const obj = {
      Username: location.state.nationalCode,
      Name: values.name,
      // Name: "values.name",
      LastName: values.lastName,
      // LastName: "values.lastName",
      FatherName: values.fatherName,
      BirthCertificatId: values.birthCertificatId,
      BirthCertificatIssuedBy: values.birthCertificatIssuedBy,
      // BirthDateAsShamsi: values.birthDateAsShamsi, //real value
      BirthDateAsShamsi: "1401/01/01", // test value
      MobileNumber2: values.mobileNumber2,
      PhoneNumber: location.state.cellphone,
      PhoneNumber2: values.phoneNumber2,
      FaxNumber: values.faxNumber,
      FaxNumber2: values.faxNumber2,
      MaritalStatus: values.maritalStatus?.value,
      Gender: values.gender?.value,
      EducationStatus: values.educationStatus?.value,
      DutySystemStatus: values.dutySystemStatus?.value,
      Password: values.password,
      // Password: "Pass123$",
      // Email: values.email,
      Email: "alirezavalipourm@gmail.com",
      SecurityStamp: location.state.securityStamp,
      CityOrVillageId: values.cityOrVillageId?.value,
    };
    completeRegisterMutation.mutate(obj, {
      onSuccess: () => {
        showToast(["ثبت نام با موفقیت انجام شد"], ToastTypes.success);
      },
      onError: () => {
        showToast(["کد وارد شده صحیح نیست"], ToastTypes.error);
      },
    });
  };
  if (loading)
    return (
      <Spinner
        // className={styles.spinner}
        size="lg"
        style={{ margin: "100px auto", display: "block" }}
      />
    );
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
          <h3>تکمیل اطلاعات</h3>

          <Formik
            initialValues={initialValues}
            validationSchema={RegisterCodeInputValidation}
            onSubmit={onSubmit}
          >
            {({ errors, touched, values }: FormikProps<any>) => (
              <Form className={Style.formPartHolder}>
                <FormInput
                  label="نام کاربری"
                  name="username"
                  icon={user}
                  iconResponsive={user}
                  withValueIcon={user}
                  value={values.username}
                  disabled
                />
                <FormInput
                  label="نام"
                  name="name"
                  icon={user}
                  iconResponsive={user}
                  withValueIcon={user}
                  value={values.name}
                />
                <FormInput
                  label="نام خانوادگی"
                  name="lastName"
                  icon={user}
                  iconResponsive={user}
                  withValueIcon={user}
                  value={values.lastName}
                />
                <FormInput
                  label="نام پدر"
                  name="fatherName"
                  icon={user}
                  iconResponsive={user}
                  withValueIcon={user}
                  value={values.fatherName}
                />
                <FormInput
                  label="شماره شناسنامه"
                  name="birthCertificatId"
                  icon={user}
                  iconResponsive={user}
                  withValueIcon={user}
                  value={values.birthCertificatId}
                />
                <FormInput
                  label="محل صدور"
                  name="birthCertificatIssuedBy"
                  icon={user}
                  iconResponsive={user}
                  withValueIcon={user}
                  value={values.birthCertificatIssuedBy}
                />
                <ModernDatePicker
                  name="birthDateAsShamsi"
                  placeholder="تاریخ تولد"
                />
                <FormInput
                  label="شماره تلفن همراه ثانویه"
                  name="mobileNumber2"
                  icon={user}
                  iconResponsive={user}
                  withValueIcon={user}
                  value={values.mobileNumber2}
                />
                <FormInput
                  label="شماره تلفن"
                  name="phoneNumber"
                  icon={user}
                  iconResponsive={user}
                  withValueIcon={user}
                  value={values.phoneNumber}
                  disabled
                />
                <FormInput
                  label="شماره تلفن ثانویه"
                  name="phoneNumber2"
                  icon={user}
                  iconResponsive={user}
                  withValueIcon={user}
                  value={values.phoneNumber2}
                />
                <FormInput
                  label="فکس"
                  name="faxNumber"
                  icon={user}
                  iconResponsive={user}
                  withValueIcon={user}
                  value={values.faxNumber}
                />
                <FormInput
                  label="فکس ثانویه"
                  name="faxNumber2"
                  icon={user}
                  iconResponsive={user}
                  withValueIcon={user}
                  value={values.faxNumber2}
                />
                <BasicSelectOption
                  name="maritalStatus"
                  data={MaritalStatusData}
                  placeHolder="وضعیت تأهل"
                />
                <BasicSelectOption
                  name="gender"
                  data={GenderStatusData}
                  placeHolder="جنسیت"
                />
                <BasicSelectOption
                  name="educationStatus"
                  data={EducationStatusData}
                  placeHolder="تحصیلات"
                />
                <BasicSelectOption
                  name="dutySystemStatus"
                  data={DutySystemStatusData}
                  placeHolder="وضعیت نظام وظیفه"
                />
                <FormInput
                  label="رمز عبور"
                  name="password"
                  icon={user}
                  iconResponsive={user}
                  withValueIcon={user}
                  value={values.password}
                  type="password"
                />
                <FormInput
                  label="ایمیل"
                  name="email"
                  icon={user}
                  iconResponsive={user}
                  withValueIcon={user}
                  value={values.email}
                />
                {provinces && (
                  <BasicSelectOption
                    name="province"
                    data={provinces}
                    placeHolder="استان"
                    onChange={(value) => onProvinceChange(value)}
                  />
                )}
                <BasicSelectOption
                  name="county"
                  data={counties ? counties : [{ value: 0, lable: "" }]}
                  placeHolder="شهرستان"
                  isDisabled={!counties}
                  onChange={(value) => counties && onCountyChange(value)}
                />
                <BasicSelectOption
                  name="cityOrVillageId"
                  data={
                    cityOrVillage ? cityOrVillage : [{ value: 0, lable: "" }]
                  }
                  placeHolder="شهر یا روستا"
                  isDisabled={!cityOrVillage}
                />
                <PrimaryButton
                  text="ثبت"
                  type="submit"
                  style={{
                    width: "90%",
                    margin: "0 auto",
                    borderRadius: "3px",
                  }}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default RegisterCompleteProfile;

{
  /* <div className="d-flex justify-content-between align-items-center mt-2">
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
</div> */
}

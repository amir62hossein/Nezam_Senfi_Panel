import React, { useState, useEffect, FC } from "react";
import { Card, CardBody, CardHeader, CardTitle, Spinner } from "reactstrap";
import { Formik, Form, FormikProps } from "formik";
import { TextInput } from "../../common/Form/InputComponents/TextInputComponents/TextInput";
import { PersonalInfoValidation } from "../../../core/validations/personalInfo.validation";
import { ModernDatePicker } from "../../common/Form";
import PrimaryButton from "./../../common/Buttons/PrimaryButton/PrimaryButton";
import BasicSelectOption from "../../common/Form/SelectOptionComponent/BasicSelectOption/BasicSelectOption";
import {
  DutySystemStatusData,
  EducationFiledType,
  EducationStatusData,
  GenderStatusData,
  MaritalStatusData,
} from "../../../core/data";
import { useSetProfile } from "../../../core/services/api/Profile.api";
import { useGetProvincesForDropDown } from "../../../core/services/api/getProvince.api";
import { useGetCounty } from "../../../core/services/api/county.api";
import { showToast } from "./../../../core/utils/show-toast";
import { ToastTypes } from "../../../core/enums";
import { useGetCityOrVillage } from "../../../core/services/api/cityOrVillage.api";
import { useGetUserProfile } from "../../../core/services/api/getUserProfile.api";
interface IPropTypes {}
interface SelectOptionItem {
  value: number;
  label: string;
}
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
interface IPersonalInfo {
  firstName: string | null;
  lastName: string | null;
  fatherName: string | null;
  gender: SelectOptionItem | null;
  nationalCode: string | null;
  birthCertificateId: string | null;
  birthCertificateIssueDate: string | null;
  birthDate: string | null;
  maritalStatus: SelectOptionItem | null;
  mobileNumber: string | null;
  mobileNumber2: string | null;
  phoneNumber: string | null;
  phoneNumber2: string | null;
  fax: string | null;
  fax2: string | null;
  educationStatus: SelectOptionItem | null;
  educationField: SelectOptionItem | null;
  dutySystemStatus: SelectOptionItem | null;
  endCardNumber?: string | null;
  endDate?: string | null;
  insuranceStatus: string | null;
  insuranceType?: string | null;
  insuranceHistory?: string | null;
  livingProvince: SelectOptionItem | null;
  livingCounty: SelectOptionItem | null;
  livingAddress: string | null;
  livingPostalCode: string | null;
  workProvince: SelectOptionItem | null;
  workCounty: SelectOptionItem | null;
  workAddress: string | null;
  workPostalCode: string | null;
  email: string | null;
  password: string | null;
}

const PersonalInfoContainer: FC<IPropTypes> = ({}) => {
  const setProfileMutation = useSetProfile();
  const getProvincesForDropDown = useGetProvincesForDropDown();
  const getCounty = useGetCounty();
  const getCityOrVillage = useGetCityOrVillage();
  const getUserProfile = useGetUserProfile();
  const [counties, setCounties] = useState<ICountyType[]>();
  const [cityOrVillage, setCityOrVillage] = useState<ICityOrVillageType[]>();
  const [provinces, setProvinces] = useState<IProvinceType[]>();
  const [initialValues, setInitialValues] = useState<IPersonalInfo>({
    firstName: null,
    lastName: null,
    fatherName: null,
    gender: null,
    nationalCode: null,
    birthCertificateId: null,
    birthCertificateIssueDate: null,
    birthDate: null,
    maritalStatus: null,
    mobileNumber: null,
    mobileNumber2: null,
    phoneNumber: null,
    phoneNumber2: null,
    fax: null,
    fax2: null,
    educationStatus: null,
    educationField: null,
    dutySystemStatus: null,
    endCardNumber: null,
    endDate: null,
    insuranceStatus: null,
    insuranceType: null,
    insuranceHistory: null,
    livingProvince: null,
    livingCounty: null,
    livingAddress: null,
    livingPostalCode: null,
    workProvince: null,
    workCounty: null,
    workAddress: null,
    workPostalCode: null,
    email: null,
    password: "Pass1234$",
  });
  useEffect(() => {
    getUserProfile.mutate(undefined, {
      onSuccess: (values) => {
        console.log(values);
        const data = values.data.result;
        const updatedInitialValue: IPersonalInfo = {
          firstName: data.firstName,
          lastName: data.lastName,
          fatherName: data.fatherName,
          gender: { value: data.gender, label: "" },
          nationalCode: data.nationalCode,
          birthCertificateId: data.birthCertificatId,
          birthCertificateIssueDate: data.birthCertificatIssuedBy,
          birthDate: data.birthDateJalali,
          maritalStatus: {
            value: data.maritalStatus,
            label: "",
          },
          mobileNumber: data.mobileNumber,
          mobileNumber2: data.mobileNumber2,
          phoneNumber: data.phoneNumber,
          phoneNumber2: data.phoneNumber2,
          fax: data.faxNumber,
          fax2: data.faxNumber2,
          educationStatus: {
            value: data.educationStatus,
            label: "",
          },
          educationField: {
            value: 1,
            label: "",
          },

          dutySystemStatus: {
            value: data.dutySystemStatus,
            label: "",
          },
          endCardNumber: null,
          endDate: null,
          insuranceStatus: "insuranceStatus",
          insuranceType: "insuranceType",
          insuranceHistory: "insuranceHistory",
          livingProvince: null,
          livingCounty: null,
          livingAddress: null,
          livingPostalCode: "1",
          workProvince: null,
          workCounty: null,
          workAddress: null,
          workPostalCode: "1",
          email: data.email,
          password: "Pass1234$",
        };
        setInitialValues(updatedInitialValue);
      },
    });
  }, []);
  useEffect(() => {
    getProvincesForDropDown.mutate(undefined, {
      onSuccess: (values) => {
        const mappedData = values.data.result.map((item: IProvinceType) => {
          return {
            value: item.id,
            label: item.title,
          };
        });
        setProvinces(mappedData);
      },
    });
  }, []);
  // console.log(initialValues);
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
  const onSubmit = (values: IPersonalInfo) => {
    console.log(values);
    const mappedData = {
      name: values.firstName,
      lastName: values.lastName,
      fatherName: values.fatherName,
      birthCertificatId: values.birthCertificateId,
      birthCertificatIssuedBy: values.birthCertificateIssueDate,
      birthDateAsShamsi: values.birthDate,
      mobileNumber2: values.mobileNumber2,
      mobileNumber: values.mobileNumber,
      phoneNumber: values.phoneNumber,
      phoneNumber2: values.phoneNumber2,
      faxNumber: values.fax,
      faxNumber2: values.fax2,
      maritalStatus: values.maritalStatus?.value,
      gender: values.gender?.value,
      educationStatus: values.educationField?.value,
      dutySystemStatus: values.dutySystemStatus?.value,
      email: values.email,
      cityOrVillageId: values.workProvince?.value, // check if true
      password: values.password,
    };
    setProfileMutation.mutate(mappedData, {
      onSuccess: (val) => {
        showToast(["اطلاعات با موفقیت ثبت شد"], ToastTypes.success);
      },
    });
  };

  if (getProvincesForDropDown.isLoading && getUserProfile.isLoading)
    return (
      <Spinner size="lg" style={{ margin: "100px auto", display: "block" }} />
    );

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>پروفایل</CardTitle>
        </CardHeader>
        <CardBody>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={PersonalInfoValidation}
          >
            {({ errors, touched, values }: FormikProps<any>) => {
              return (
                <Form>
                  <div className="row">
                    <div className="col-md-6">
                      <TextInput
                        name="firstName"
                        placeholder="نام"
                        value={values.firstName}
                      />
                      <TextInput
                        name="fatherName"
                        placeholder="نام پدر"
                        value={values.fatherName}
                      />
                      <TextInput
                        name="birthCertificateId"
                        placeholder="شماره شناسنامه"
                        value={values.birthCertificateId}
                      />
                      <ModernDatePicker
                        name="birthCertificateIssueDate"
                        placeholder="تاریخ صدور"
                        panelStyle
                        initialValue={values.birthCertificateIssueDate}
                      />
                      <BasicSelectOption
                        name="maritalStatus"
                        placeHolder="وضعیت تأهل"
                        data={MaritalStatusData}
                        panelStyle
                      />
                      <TextInput
                        name="mobileNumber2"
                        placeholder="شماره موبایل ثانویه"
                        value={values.mobileNumber2}
                      />
                      <TextInput
                        name="email"
                        placeholder="ایمیل"
                        value={values.email}
                      />
                      <TextInput
                        name="phoneNumber2"
                        placeholder="شماره تماس ثانویه"
                        value={values.phoneNumber2}
                      />
                      <TextInput
                        name="fax2"
                        placeholder="فکس ثانویه"
                        value={values.fax2}
                      />
                      <BasicSelectOption
                        name="educationField"
                        placeHolder="رشته تحصیلی"
                        data={EducationFiledType}
                        panelStyle
                      />
                      <TextInput
                        name="endCardNumber"
                        placeholder="شماره کارت پایان خدمت"
                        value={values.endCardNumber}
                      />
                      <TextInput
                        name="insuranceStatus"
                        placeholder="وضعیت بیمه"
                        value={values.insuranceStatus}
                      />
                      <TextInput
                        name="insuranceHistory"
                        placeholder="سابقه بیمه"
                        value={values.insuranceHistory}
                      />
                    </div>
                    <div className="col-md-6">
                      <TextInput
                        name="lastName"
                        placeholder="نام خانوادگی"
                        value={values.lastName}
                      />

                      <TextInput
                        name="nationalCode"
                        placeholder="کد ملی"
                        value={values.nationalCode}
                      />

                      <TextInput
                        name="mobileNumber"
                        placeholder="شماره موبایل"
                        value={values.mobileNumber}
                      />

                      <ModernDatePicker
                        name="birthDate"
                        placeholder="تاریخ تولد"
                        panelStyle={true}
                        initialValue={values.birthDate}
                      />

                      <BasicSelectOption
                        name="gender"
                        placeHolder="جنسیت"
                        data={GenderStatusData}
                        panelStyle
                      />

                      <TextInput
                        name="phoneNumber"
                        placeholder="شماره تماس"
                        value={values.phoneNumber}
                      />

                      <TextInput
                        name="password"
                        placeholder="رمز عبور"
                        value={values.password}
                      />

                      <TextInput
                        name="fax"
                        placeholder="فکس"
                        value={values.fax}
                      />

                      <BasicSelectOption
                        name="educationStatus"
                        placeHolder="وضعیت تحصیل"
                        data={EducationStatusData}
                        panelStyle
                      />

                      <BasicSelectOption
                        name="dutySystemStatus"
                        placeHolder="وضعیت نظام وظیفه"
                        data={DutySystemStatusData}
                        panelStyle
                      />

                      <TextInput
                        name="endDate"
                        placeholder="تاریخ  پایان خدمت"
                        value={values.endCardNumber}
                      />

                      <TextInput
                        name="insuranceType"
                        placeholder="نوع بیمه"
                        value={values.insuranceType}
                      />
                    </div>

                    <h3 className="block">محل زندگی</h3>

                    <div className="col-md-6">
                      {provinces && (
                        <BasicSelectOption
                          name="livingProvince"
                          placeHolder="استان محل زندگی"
                          data={provinces}
                          panelStyle
                          onChange={(value) => onProvinceChange(value)}
                        />
                      )}
                      <BasicSelectOption
                        name="livingCityOrVillage"
                        placeHolder="شهر یا روستا"
                        data={
                          cityOrVillage
                            ? cityOrVillage
                            : [{ value: 0, lable: "" }]
                        }
                        panelStyle
                        isDisabled={!cityOrVillage}
                      />
                      <TextInput
                        name="livingPostalCode"
                        placeholder="کد پستی محل زندگی"
                        value={values.livingPostalCode}
                      />
                    </div>
                    <div className="col-md-6">
                      <BasicSelectOption
                        name="livingCounty"
                        placeHolder="شهرستان محل زندگی"
                        data={counties ? counties : [{ value: 0, lable: "" }]}
                        panelStyle
                        onChange={(value) => counties && onCountyChange(value)}
                        isDisabled={!counties}
                      />

                      <TextInput
                        name="livingAddress"
                        placeholder="آدرس محل زندگی"
                        value={values.livingAddress}
                      />
                    </div>

                    <h3 className="block">محل کار</h3>
                    <div className="col-md-6">
                      {provinces && (
                        <BasicSelectOption
                          name="workProvince"
                          placeHolder="استان محل زندگی"
                          data={provinces}
                          panelStyle
                          onChange={onProvinceChange}
                        />
                      )}
                      <TextInput
                        name="workAddress"
                        placeholder="آدرس محل کار"
                        value={values.workAddress}
                      />
                    </div>
                    <div className="col-md-6">
                      <TextInput
                        name="workCounty"
                        placeholder="شهرستان محل کار"
                        value={values.workCounty}
                      />

                      <TextInput
                        name="workPostalCode"
                        placeholder="کد پستی محل کار"
                        value={values.workPostalCode}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <PrimaryButton
                      isLoading={setProfileMutation.isLoading}
                      text="ثبت"
                      type="submit"
                      className="btn btn-primary px-0"
                      style={{
                        maxWidth: "150px",
                        minWidth: "150px",
                        marginLeft: "10px",
                        color: "white",
                      }}
                    />
                    <PrimaryButton
                      text="انصراف"
                      type="button"
                      className="btn btn-danger px-0"
                      style={{
                        maxWidth: "150px",
                        minWidth: "150px",
                        color: "white",
                      }}
                    />
                  </div>
                </Form>
              );
            }}
          </Formik>
        </CardBody>
      </Card>
    </>
  );
};

export { PersonalInfoContainer };

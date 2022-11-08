import React, { FC, useState, useEffect } from "react";
import { Formik, Form, FormikProps } from "formik";
// import styles from "./Details.module.scss";
import { TextInput } from "../../../../common/Form/InputComponents/TextInputComponents/TextInput";
import { JahadDetailsValidation } from "../../../../../core/validations/jahadCounty-details.validation";
import {
  Button,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Spinner,
} from "reactstrap";
import { Search } from "react-feather";
import { InpuLable } from "../../../../common/Form";
import { useGetUserInfoByNationalCode } from "../../../../../core/services/api/account.api";
import { useSetJahadCountyBasicData } from "../../../../../core/services/api/setJahadCounty.api";
import { showToast } from "../../../../../core/utils";
import { ToastTypes } from "../../../../../core/enums";
import { useGetProvincesForDropDown } from "../../../../../core/services/api/getProvince.api";
import BasicSelectOption from "../../../../common/Form/SelectOptionComponent/BasicSelectOption/BasicSelectOption";
import PrimaryButton from "../../../../common/Buttons/PrimaryButton/PrimaryButton";
import { useGetCounty } from "../../../../../core/services/api/county.api";
import { useGetCityOrVillage } from "../../../../../core/services/api/cityOrVillage.api";
import { IJahadCountyBasic } from "../../../../../core/models";
import { useHistory } from "react-router-dom";
import UserInfoBox from "../../../../common/UserInfoBox/UserInfoBox";
interface IUserInfo {
  birthCertificatId: string;
  firstName: string;
  id: number;
  lastName: string;
  mobileNumber2: string;
  nationalCode: string;
}
interface IPropTypes {}
interface IFormTypes {
  managerNationalCode: string | null;
  provinceId: string | null;
  countyId: string | null;
  cityOrVillage: string | null;
  managerName: string | null;
}
interface IProvinceType {
  id: number;
  title: string;
}
interface ICountyType {
  id: number;
  title: string;
}

interface SelectOptionItem {
  value: number;
  label: string;
}
const Details: FC<IPropTypes> = ({}) => {
  const history = useHistory();
  const getUserByNationalIdMutation = useGetUserInfoByNationalCode();
  const getProvincesForDropDown = useGetProvincesForDropDown();
  const getCounty = useGetCounty();
  const getCityOrVillage = useGetCityOrVillage();
  const setJahadCountyBasicDataMutation = useSetJahadCountyBasicData();
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const [provinces, setProvinces] = useState<SelectOptionItem[]>();
  const [counties, setCounties] = useState<SelectOptionItem[]>();
  const [cityOrVillage, setCityOrVillage] = useState<SelectOptionItem[]>();
  const [initialValues, setInitialValues] = useState<IFormTypes>({
    managerNationalCode: null,
    provinceId: null,
    countyId: null,
    cityOrVillage: null,
    managerName: null,
  });
  const onSubmit = (values: any) => {
    console.log(values);
    const obj: IJahadCountyBasic = {
      title: values.managerName,
      managerUserName: values.managerNationalCode,
      countyId: values.countyId.value,

      ////
      // provinceId: values.provinceId.value,
      cityOrVilageId: values.cityOrVillage.value,
    };
    // console.log(obj);

    setJahadCountyBasicDataMutation.mutate(obj, {
      onSuccess: () => {
        showToast(["اطلاعات ثبت شد"], ToastTypes.success);
        history.push(
          "/JahadManagement/County/contactinfo/" + values.data.result.id
        );
      },
    });
  };

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

  if (!provinces)
    return (
      <Spinner
        // className={styles.spinner}
        size="lg"
        style={{ margin: "100px auto", display: "block" }}
      />
    );
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: any) => onSubmit(values)}
        validationSchema={JahadDetailsValidation}
      >
        {({
          setFieldValue,
          errors,
          setFieldTouched,
          touched,
          values,
          handleChange,
        }: FormikProps<any>) => (
          <Form>
            <div className="row">
              <div className="col-md-6">
                {/* <TextInput
                  name="provinceCode"
                  placeholder="توسط سیستم صادر میشود"
                  lableText="کد استان"
                  value={values.provinceCode}
                  disabled
                /> */}

                <TextInput
                  name="managerName"
                  placeholder="نام مدیریت شهرستان"
                  lableText="نام مدیریت شهرستان"
                  value={values.managerName}
                />
                <FormGroup>
                  <InpuLable lableText="کد ملی مدیر" significant={true} />
                  <InputGroup>
                    <Input
                      value={values.managerNationalCode}
                      placeholder="کد ملی مدیر را وارد کنید"
                      type="text"
                      name="managerNationalCode"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <InputGroupAddon dir="ltr" addonType="append">
                      <Button
                        onClick={() => {
                          setUserInfo(undefined);
                          setFieldValue("roles", null);
                          getUserByNationalIdMutation.mutate(
                            values.managerNationalCode,
                            {
                              onSuccess: (val: any) => {
                                if (val.data && val.data.result) {
                                  const user = val.data.result;
                                  setUserInfo(user);
                                }
                              },
                            }
                          );
                        }}
                        color="primary"
                      >
                        {getUserByNationalIdMutation.isLoading ? (
                          <Spinner
                            style={{
                              padding: "0 !important",
                              margin: "0 !important",
                            }}
                            color="white"
                            size="sm"
                          />
                        ) : (
                          <Search size={15} />
                        )}
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </div>
              <div className="col-md-6">
                <BasicSelectOption
                  name="provinceId"
                  placeHolder="نام استان"
                  lableText="نام استان"
                  data={provinces}
                  panelStyle
                  onChange={(value) => onProvinceChange(value)}
                />
                <BasicSelectOption
                  name="countyId"
                  placeHolder="شهرستان"
                  lableText="شهرستان"
                  data={counties ? counties : [{ value: 0, lable: "" }]}
                  panelStyle
                  onChange={(value) => counties && onCountyChange(value)}
                  isDisabled={!counties}
                />
                <BasicSelectOption
                  name="cityOrVillage"
                  placeHolder="شهر یا روستا"
                  lableText="شهر یا روستا"
                  data={
                    cityOrVillage ? cityOrVillage : [{ value: 0, lable: "" }]
                  }
                  panelStyle
                  isDisabled={!cityOrVillage}
                />
              </div>
            </div>

            <UserInfoBox userInfo={userInfo} />

            <div className="d-flex justify-content-end">
              <PrimaryButton
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
        )}
      </Formik>
    </>
  );
};

export { Details };

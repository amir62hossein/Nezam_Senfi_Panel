import React, { FC, useState, useEffect } from "react";
import { Formik, Form, FormikProps } from "formik";
// import styles from "./Details.module.scss";
import { TextInput } from "../../../../common/Form/InputComponents/TextInputComponents/TextInput";
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
import BasicSelectOption from "../../../../common/Form/SelectOptionComponent/BasicSelectOption/BasicSelectOption";
import { useGetProvincesForDropDown } from "../../../../../core/services/api/getProvince.api";
import { showToast } from "../../../../../core/utils";
import { ToastTypes } from "../../../../../core/enums";
import { useHistory } from "react-router-dom";
import PrimaryButton from "../../../../common/Buttons/PrimaryButton/PrimaryButton";
import { JahadProvinceDetailsValidation } from "./../../../../../core/validations/jahadProvince-details.validation";
import { useSetJahadProvinceBasicData } from "../../../../../core/services/api/setJahadProvince.api";
import { IJahadProvinceBasic } from "./../../../../../core/models/jahad-province.model";
import { useGetCounty } from "../../../../../core/services/api/county.api";
import { useGetCityOrVillage } from "../../../../../core/services/api/cityOrVillage.api";
import UserInfoBox from "../../../../common/UserInfoBox/UserInfoBox";
interface IPropTypes {}
interface IFormTypes {
  provinceId: number | null;
  managerName: string | null;
  managerNationalCode: string | null;
}
interface IProvinceType {
  id: number;
  title: string;
}
interface SelectOptionItem {
  value: number;
  label: string;
}
interface ICountyType {
  id: number;
  title: string;
}
const Details: FC<IPropTypes> = ({}) => {
  const history = useHistory();
  const getUserByNationalIdMutation = useGetUserInfoByNationalCode();
  const getProvincesForDropDown = useGetProvincesForDropDown();
  // const getCounty = useGetCounty();
  // const getCityOrVillage = useGetCityOrVillage();
  const [provinces, setProvinces] = useState<IProvinceType[]>();
  const setJahadProvince = useSetJahadProvinceBasicData();
  const [userInfo, setUserInfo] = useState<any>(null);
  // const [counties, setCounties] = useState<SelectOptionItem[]>();
  // const [cityOrVillage, setCityOrVillage] = useState<SelectOptionItem[]>();

  const [initialValues, setInitialValues] = useState<IFormTypes>({
    provinceId: null,
    managerNationalCode: null,
    managerName: null,
  });
  const onSubmit = (values: any) => {
    console.log(values);
    const obj: IJahadProvinceBasic = {
      title: values.managerName,
      provinceId: values.provinceId.value,
      managerUserName: values.managerNationalCode,
    };
    console.log(obj);
    setJahadProvince.mutate(obj, {
      onSuccess: (value) => {
        console.log(value);
        showToast(["?????????????? ?????? ????"], ToastTypes.success);
        history.push(
          "/JahadManagement/Province/details/" + values.data.result.id
        );
      },
    });
  };
  // const onProvinceChange = (value: any) => {
  //   if (typeof value.value == "number" && typeof value.label == "string") {
  //     getCounty.mutate(value.value, {
  //       onSuccess: (value) => {
  //         const mappedCounties = value.data.result.map(
  //           (value: ICountyType) => ({
  //             value: value.id,
  //             label: value.title,
  //           })
  //         );
  //         setCounties(mappedCounties);
  //       },
  //     });
  //   }
  // };
  // const onCountyChange = (value: any) => {
  //   if (typeof value.value == "number" && typeof value.label == "string") {
  //     getCityOrVillage.mutate(value.value, {
  //       onSuccess: (value) => {
  //         const mappedCityOrVillage = value.data.result.map(
  //           (value: ICountyType) => ({
  //             value: value.id,
  //             label: value.title,
  //           })
  //         );
  //         setCityOrVillage(mappedCityOrVillage);
  //       },
  //     });
  //   }
  // };
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
        validationSchema={JahadProvinceDetailsValidation}
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
                  placeholder="???????? ?????????? ???????? ??????????"
                  lableText="???? ??????????"
                  value={values.provinceCode}
                  disabled
                /> */}
                <TextInput
                  name="managerName"
                  placeholder="?????? ???????????? ??????????"
                  lableText="?????? ???????????? ??????????"
                  value={values.managerName}
                />
                <BasicSelectOption
                  name="provinceId"
                  placeHolder="?????? ??????????"
                  lableText="?????? ??????????"
                  data={provinces}
                  panelStyle
                />
                {/* <BasicSelectOption
                  name="countyId"
                  placeHolder="??????????????"
                  lableText="??????????????"
                  data={counties ? counties : [{ value: 0, lable: "" }]}
                  panelStyle
                  onChange={(value) => counties && onCountyChange(value)}
                  isDisabled={!counties}
                />
                <BasicSelectOption
                  name="cityOrVillage"
                  placeHolder="?????? ???? ??????????"
                  lableText="?????? ???? ??????????"
                  data={
                    cityOrVillage ? cityOrVillage : [{ value: 0, lable: "" }]
                  }
                  panelStyle
                  isDisabled={!cityOrVillage}
                /> */}
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <InpuLable lableText="???? ?????? ????????" significant={true} />
                  <InputGroup>
                    <Input
                      value={values.managerNationalCode}
                      placeholder="???? ?????? ???????? ???? ???????? ????????"
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
            </div>
            <UserInfoBox userInfo={userInfo} />
            <div className="d-flex justify-content-end">
              <div className="d-flex justify-content-end">
                <PrimaryButton
                  isLoading={setJahadProvince.isLoading}
                  text="??????"
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
                  text="????????????"
                  type="button"
                  className="btn btn-danger px-0"
                  style={{
                    maxWidth: "150px",
                    minWidth: "150px",
                    color: "white",
                  }}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { Details };

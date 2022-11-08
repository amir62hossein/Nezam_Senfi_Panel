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
import PrimaryButton from "../../../../common/Buttons/PrimaryButton/PrimaryButton";
import { useGetProvincesForDropDown } from "../../../../../core/services/api/getProvince.api";
import BasicSelectOption from "../../../../common/Form/SelectOptionComponent/BasicSelectOption/BasicSelectOption";
import { JahadMainLocationDetailsValidation } from "../../../../../core/validations/jahadMainLocation-details.validation";
import { useSetJahadMainLocationBasicData } from "../../../../../core/services/api/setJahadMainLocation.api";
import { showToast } from "../../../../../core/utils";
import { ToastTypes } from "../../../../../core/enums";
import UserInfoBox from "../../../../common/UserInfoBox/UserInfoBox";

interface IPropTypes {}
interface IFormTypes {
  managerName: string | null;
  managerNationalCode: string | null;
}

const Details: FC<IPropTypes> = ({}) => {
  const getUserByNationalIdMutation = useGetUserInfoByNationalCode();
  const setJahadMainLocationBasicData = useSetJahadMainLocationBasicData();
  const [userInfo, setUserInfo] = useState<any>(null);
  console.log(userInfo);
  const [initialValues, setInitialValues] = useState<IFormTypes>({
    managerNationalCode: null,
    managerName: null,
    // provinceId: null,
  });
  const onSubmit = (values: any) => {
    console.log(values);
    const obj: any = {
      title: values.managerName,
      managerUserName: values.managerNationalCode,
    };
    setJahadMainLocationBasicData.mutate(obj, {
      onSuccess: (value) => {
        console.log(value);
        showToast(["اطلاعات ثبت شد"], ToastTypes.success);
      },
    });
  };

  // useEffect(() => {
  //   getProvincesForDropDown.mutate(undefined, {
  //     onSuccess: (values) => {
  //       const mappedData = values.data.result.map((item: IProvinceType) => {
  //         return {
  //           value: item.id,
  //           label: item.title,
  //         };
  //       });
  //       setProvinces(mappedData);
  //     },
  //   });
  // }, []);

  // if (!provinces)
  //   return (
  //     <Spinner
  //       className={styles.spinner}
  //       size="lg"
  //       style={{ margin: "100px auto", display: "block" }}
  //     />
  //   );
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={JahadMainLocationDetailsValidation}
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
                <TextInput
                  name="managerName"
                  placeholder="نام مدیریت کشور"
                  lableText="نام مدیریت کشور"
                  value={values.managerName}
                />
              </div>
              <div className="col-md-6">
                {/* <BasicSelectOption
                  name="provinceId"
                  placeHolder="نام استان"
                  lableText="نام استان"
                  data={provinces}
                  panelStyle
                /> */}
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
                          setUserInfo("");
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

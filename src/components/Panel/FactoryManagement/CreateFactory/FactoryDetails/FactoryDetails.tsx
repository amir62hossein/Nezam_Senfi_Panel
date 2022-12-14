import React, { useState } from "react";
import { useGetUserInfoByNationalCode } from "../../../../../core/services/api/account.api";
// import styles from "./FactoryDetails.module.scss";
import { Formik } from "formik";
import { Form } from "formik";
import { FormikProps } from "formik";
import { FactoryDetailsValidation } from "./../../../../../core/validations/factory-details.validation";
import { TextInput } from "../../../../common/Form/InputComponents/TextInputComponents/TextInput/TextInput";
import { InpuLable, ModernDatePicker } from "../../../../common/Form";
import {
  Button,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Spinner,
} from "reactstrap";
import { Search } from "react-feather";
import BasicSelectOption from "../../../../common/Form/SelectOptionComponent/BasicSelectOption/BasicSelectOption";
import PrimaryButton from "../../../../common/Buttons/PrimaryButton/PrimaryButton";
import { FactoryTypes } from "../../../../../core/data/factory-types.data";
import { useSetFactoryBasicData } from "../../../../../core/services/api/setFactoryData.api";
import { IUserInfo } from "../../../../../core/models/user-info.model";
import UserInfoBox from "../../../../common/UserInfoBox/UserInfoBox";
type Props = {};

interface SelectOptionItem {
  value: number;
  label: string;
}
interface IFormTypes {
  // factoryCode: number | null;
  factoryName: string | null;
  factoryType: SelectOptionItem | null;
  // nationalCode: string | null;
  economicalCode: string | null;
  parvaneCode: string | null;
  parvaneValidDate: string | null;
  managerNationalCode: string | null;
}
export default function FactoryDetails({}: Props) {
  const getUserByNationalIdMutation = useGetUserInfoByNationalCode();
  const setFactoryBasicData = useSetFactoryBasicData();
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const [initialValues, setInitialValues] = useState<IFormTypes>({
    // factoryCode: null,
    factoryName: null,
    managerNationalCode: null,
    economicalCode: null,
    parvaneCode: null,
    parvaneValidDate: null,
    factoryType: null,
    // nationalCode: null,
  });
  const onSubmit = (values: IFormTypes) => {
    console.log(values);
    const obj: any = {
      title: values.factoryName,
      managerUserName: values.managerNationalCode,
      economicCode: values.economicalCode,
      licenseNumber: values.parvaneCode,
      licenseExpirationDateTimeAsShamsi: values.parvaneValidDate,
      nationalId: userInfo?.nationalCode,
      companyType: values.factoryType?.value,
      factoryType: values.factoryType?.value,
    };
    console.log(obj);
    setFactoryBasicData.mutate(obj, {
      onSuccess: (value) => {
        console.log("value", value);
      },
    });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={FactoryDetailsValidation}
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
              <div className="col-md-6 pl-2">
                {/* <TextInput
                  name="factoryCode"
                  placeholder="???????? ?????????? ???????? ??????????"
                  lableText="???? ??????????????"
                  value={values.factoryCode}
                  disabled
                /> */}
                <TextInput
                  name="factoryName"
                  placeholder="?????? ??????????????"
                  lableText="?????? ??????????????"
                  value={values.factoryName}
                />
                <BasicSelectOption
                  name="factoryType"
                  placeHolder="?????? ??????????????"
                  data={FactoryTypes}
                  panelStyle
                  lableText="?????? ??????????????"
                />
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
                        onClick={(e) => {
                          // e.preventDefault();
                          setUserInfo(undefined);
                          setFieldValue("roles", null);
                          getUserByNationalIdMutation.mutate(
                            values.managerNationalCode,
                            {
                              onSuccess: (val: any) => {
                                if (val.data && val.data.result) {
                                  const user = val.data.result;
                                  console.log(user);
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
              <div className="col-md-6 pl-2">
                {/* <TextInput
                  name="nationalCode"
                  placeholder="?????????? ??????"
                  lableText="?????????? ??????"
                  value={values.nationalCode}
                /> */}
                <TextInput
                  name="economicalCode"
                  placeholder="???? ??????????????"
                  lableText="???? ??????????????"
                  value={values.economicalCode}
                />
                <TextInput
                  name="parvaneCode"
                  placeholder="?????????? ????????????"
                  lableText="?????????? ????????????"
                  value={values.parvaneCode}
                />
                <ModernDatePicker
                  name="parvaneValidDate"
                  placeholder="?????????? ???????????? ????????????"
                  lableText="?????????? ???????????? ????????????"
                  panelStyle
                />
              </div>
            </div>
            <UserInfoBox userInfo={userInfo} />
            <div>
              <div className="d-flex justify-content-end">
                <PrimaryButton
                  isLoading={setFactoryBasicData.isLoading}
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
}

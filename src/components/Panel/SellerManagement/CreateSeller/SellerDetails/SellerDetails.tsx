import React, { useState } from "react";
import { useGetUserInfoByNationalCode } from "../../../../../core/services/api/account.api";
// import styles from "./SellerDetails.module.scss";
import { Formik } from "formik";
import { Form } from "formik";
import { FormikProps } from "formik";
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
import { FactoryTypes } from "../../../../../core/data/factory-types.data";
import PrimaryButton from "../../../../common/Buttons/PrimaryButton/PrimaryButton";
import { SellerDetailsValidation } from "../../../../../core/validations/seller-details.validation";
import UserInfoBox from "../../../../common/UserInfoBox/UserInfoBox";
type Props = {};
interface IFormTypes {
  sellerName: string | null;
  sellerType: number | null;
  nationalCode: string | null;
  economicalCode: string | null;
  parvaneCode: string | null;
  parvaneValidDate: string | null;
  // managerNationalCode: string | null;
}
interface IUserInfo {
  birthCertificatId: string;
  firstName: string;
  id: number;
  lastName: string;
  mobileNumber2: string;
  nationalCode: string;
}
export default function FactoryDetails({}: Props) {
  const getUserByNationalIdMutation = useGetUserInfoByNationalCode();
  const [userInfo, setUserInfo] = useState<IUserInfo>();

  const [initialValues, setInitialValues] = useState<IFormTypes>({
    sellerName: null,
    sellerType: null,
    nationalCode: null,
    economicalCode: null,
    parvaneCode: null,
    parvaneValidDate: null,
    // managerNationalCode: null,
  });
  const onSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SellerDetailsValidation}
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
                  placeholder="توسط سیستم صادر میشود"
                  lableText="کد عامل فروش"
                  value={values.factoryCode}
                  disabled
                /> */}
                <TextInput
                  name="sellerName"
                  placeholder="نام عامل فروش"
                  lableText="نام عامل فروش"
                  value={values.sellerName}
                />
                <BasicSelectOption
                  name="sellerType"
                  placeHolder="نوع عامل فروش"
                  data={FactoryTypes}
                  panelStyle
                  lableText="نوع عامل فروش"
                />
                <FormGroup>
                  <InpuLable lableText="کد ملی عامل فروش" significant={true} />
                  <InputGroup>
                    <Input
                      value={values.managerNationalCode}
                      placeholder="کد ملی عامل فروش را وارد کنید"
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
                  placeholder="شناسه ملی"
                  lableText="شناسه ملی"
                  value={values.nationalCode}
                /> */}
                <TextInput
                  name="economicalCode"
                  placeholder="کد اقتصادی"
                  lableText="کد اقتصادی"
                  value={values.economicalCode}
                />
                <TextInput
                  name="parvaneCode"
                  placeholder="شماره پروانه"
                  lableText="شماره پروانه"
                  value={values.parvaneCode}
                />
                <ModernDatePicker
                  name="parvaneValidDate"
                  placeholder="تاریخ اعتبار پروانه"
                  lableText="تاریخ اعتبار پروانه"
                  panelStyle
                />
              </div>
            </div>

            <UserInfoBox userInfo={userInfo} />
            <div>
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
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

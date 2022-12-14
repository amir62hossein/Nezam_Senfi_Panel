import React, { useState } from "react";
import { useGetUserInfoByNationalCode } from "../../../../../core/services/api/account.api";
// import styles from "./ImporterDetails.module.scss";
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
import { ImporterDetailsValidation } from "../../../../../core/validations/importer-details.validation";
import { useSetImporterBasicData } from "../../../../../core/services/api/setImporter.api";
import UserInfoBox from "../../../../common/UserInfoBox/UserInfoBox";
type Props = {};
interface IFormTypes {
  importerName: string | null;
  importerType: number | null;
  // nationalCode: string | null;
  economicalCode: string | null;
  parvaneCode: string | null;
  parvaneValidDate: string | null;
  managerNationalCode: string | null;
}
interface IUserInfo {
  birthCertificatId: string;
  firstName: string;
  id: number;
  lastName: string;
  mobileNumber2: string;
  nationalCode: string;
}
export default function ImporterDetails({}: Props) {
  const setImporterBasicData = useSetImporterBasicData();
  const getUserByNationalIdMutation = useGetUserInfoByNationalCode();
  const [userInfo, setUserInfo] = useState<IUserInfo>();

  const [initialValues, setInitialValues] = useState<IFormTypes>({
    importerName: null,
    importerType: null,
    // nationalCode: null,
    economicalCode: null,
    parvaneCode: null,
    parvaneValidDate: null,
    managerNationalCode: null,
  });
  const onSubmit = (values: any) => {
    console.log(values);
    // const obj = {};
    // setImporterBasicData.mutate();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ImporterDetailsValidation}
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
                  lableText="???? ????????"
                  value={values.factoryCode}
                  disabled
                /> */}
                <TextInput
                  name="importerName"
                  placeholder="?????? ????????"
                  lableText="?????? ????????"
                  value={values.importerName}
                />
                <BasicSelectOption
                  name="importerType"
                  placeHolder="?????? ????????"
                  data={FactoryTypes}
                  panelStyle
                  lableText="?????? ????????"
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

            <div>
              <UserInfoBox userInfo={userInfo} />
              <div className="d-flex justify-content-end">
                <PrimaryButton
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

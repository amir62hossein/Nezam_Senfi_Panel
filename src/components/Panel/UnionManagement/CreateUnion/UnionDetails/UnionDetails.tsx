import React, { useState, useEffect } from "react";
import { useGetUserInfoByNationalCode } from "../../../../../core/services/api/account.api";
// import styles from "./UnionDetails.module.scss";
import { Formik } from "formik";
import { Form } from "formik";
import { FormikProps } from "formik";
import { UnionDetailsValidation } from "../../../../../core/validations/union-details.validation";
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
import { UnionTypes } from "../../../../../core/data/union-types.data";
import PrimaryButton from "../../../../common/Buttons/PrimaryButton/PrimaryButton";
import { useSetUnionBasicData } from "./../../../../../core/services/api/setUnion.api";
import { useSetJahadProvinceBasicData } from "../../../../../core/services/api/setJahadProvince.api";
import { useGetProvincesForDropDown } from "../../../../../core/services/api/getProvince.api";
import { showToast } from "../../../../../core/utils";
import { ToastTypes } from "../../../../../core/enums";
import { useHistory } from "react-router-dom";
import UserInfoBox from "../../../../common/UserInfoBox/UserInfoBox";

type Props = {};
interface IFormTypes {
  unionName: string | null;
  unionType: number | null;
  nationalCode: string | null;
  economicalCode: string | null;
  parvaneCode: string | null;
  parvaneValidDate: string | null;
  managerUserName: string | null;
  provinceId: string | null;
}
interface IUserInfo {
  birthCertificatId: string;
  firstName: string;
  id: number;
  lastName: string;
  mobileNumber2: string;
  nationalCode: string;
}
interface IProvinceType {
  id: number;
  title: string;
}
export default function UnionDetails({}: Props) {
  const history = useHistory();
  const setUnionBasicData = useSetUnionBasicData();
  const getProvincesForDropDown = useGetProvincesForDropDown();
  const getUserByNationalIdMutation = useGetUserInfoByNationalCode();
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const [provinces, setProvinces] = useState<IProvinceType[]>();

  const [initialValues, setInitialValues] = useState<IFormTypes>({
    unionName: null,
    unionType: null,
    nationalCode: null,
    economicalCode: null,
    parvaneCode: null,
    parvaneValidDate: null,
    managerUserName: null,
    provinceId: null,
  });
  const onSubmit = (values: any) => {
    console.log(values);
    const obj = {
      // id: 0,
      title: values.unionName,
      managerUserName: values.managerUserName,
      companyType: values.unionType.value,
      nationalId: values.managerUserName,
      economicCode: values.economicalCode,
      provinceId: values.provinceId.value,
    };
    setUnionBasicData.mutate(obj, {
      onSuccess: (v) => {
        console.log(v);
        showToast(["?????????????? ???? ???????????? ?????? ????"], ToastTypes.success);
        history.push(
          "/UnionManagement/CreateUnion/ContactInfo/" + v.data.result
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
        onSubmit={onSubmit}
        validationSchema={UnionDetailsValidation}
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
                <TextInput
                  name="unionName"
                  placeholder="?????? ??????????????"
                  lableText="?????? ??????????????"
                  value={values.unionName}
                />
                <BasicSelectOption
                  name="provinceId"
                  placeHolder="?????? ??????????"
                  lableText="?????? ??????????"
                  data={provinces}
                  panelStyle
                />
                <BasicSelectOption
                  name="unionType"
                  placeHolder="?????? ??????????????"
                  data={UnionTypes}
                  panelStyle
                  lableText="?????? ??????????????"
                />
                <FormGroup>
                  <InpuLable lableText="???? ?????? ????????" significant={true} />
                  <InputGroup>
                    <Input
                      value={values.managerUserName}
                      placeholder="???? ?????? ???????? ???? ???????? ????????"
                      type="text"
                      name="managerUserName"
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
                            values.managerUserName,
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

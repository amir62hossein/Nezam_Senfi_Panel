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
import { LivestockData } from "../../../../../core/data/livestock-type.data";
import { LivestockFigureData } from "../../../../../core/data/livestock-figure.data";
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
export function LiveStockSpecifiction({}: Props) {
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
                <BasicSelectOption
                  name="LiveStockType"
                  placeHolder="نوع  دام"
                  data={LivestockData}
                  panelStyle
                  lableText="نوع دام"
                />
                <BasicSelectOption
                  name="LiveStockFigure"
                  placeHolder="رقم  دام"
                  data={LivestockFigureData}
                  panelStyle
                  lableText="رقم دام"
                />
                <TextInput
                  name="count"
                  placeholder="تعداد"
                  lableText="تعداد"
                  value={values.economicalCode}
                />
                <TextInput
                  name="NominalCapacity"
                  placeholder="ظرفیت اسمی"
                  lableText="ظرفیت اسمی"
                  value={values.economicalCode}
                />
                <TextInput
                  name="HerdCode"
                  placeholder="کد گله"
                  lableText="کد گله"
                  value={values.economicalCode}
                />
                <TextInput
                  name="EpidemiologicalCode"
                  placeholder="کد اپیدیومولوژیک"
                  lableText="کد اپیدیومولوژیک"
                  value={values.economicalCode}
                />
              </div>
              <div className="col-md-6 pl-2"></div>
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

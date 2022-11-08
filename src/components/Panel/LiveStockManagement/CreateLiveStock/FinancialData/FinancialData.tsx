import React, { useState } from "react";
import { Formik } from "formik";
import { FormikProps } from "formik";
import { Form } from "formik";
import { TextInput } from "../../../../common/Form";
import { ListTable } from "../../../../common/ListTable/ListTable";
import PrimaryButton from "../../../../common/Buttons/PrimaryButton/PrimaryButton";
import { LiveStockFinancialDataValidation } from "../../../../../core/validations/liveStock-financialData.validation";
type Props = {};
interface IFormTypes {
  bankName: number | null;
  accountType: number | null;
  accountNumber: string | null;
  shaba: string | null;
  cardNumber: string | null;
  bankBranchName: string | null;
  bankBranchCode: string | null;
}
export default function FinancialData({}: Props) {
  const [initialValues, setInitialValues] = useState<IFormTypes>({
    bankName: null,
    accountType: null,
    accountNumber: null,
    shaba: null,
    cardNumber: null,
    bankBranchName: null,
    bankBranchCode: null,
  });
  const onSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={LiveStockFinancialDataValidation}
      >
        {({ errors, touched, values }: FormikProps<any>) => (
          <Form>
            <div className="row">
              <div className="col-md-6">
                <TextInput
                  name="bankName"
                  placeholder="نام بانک"
                  lableText="نام بانک"
                  value={values.bankName}
                />
                <TextInput
                  name="bankBranchName"
                  placeholder="نام شعبه"
                  lableText="نام شعبه"
                  value={values.bankBranchName}
                />
                <TextInput
                  name="bankBranchCode"
                  placeholder="کد شعبه"
                  lableText="کد شعبه"
                  value={values.bankBranchCode}
                />
                <TextInput
                  name="accountType"
                  placeholder="نوع حساب"
                  lableText="نوع حساب"
                  value={values.accountType}
                />
                <TextInput
                  name="accountNumber"
                  placeholder="شماره حساب"
                  lableText="شماره حساب"
                  value={values.accountNumber}
                />
                <TextInput
                  name="shaba"
                  placeholder="شماره شبا"
                  lableText="شماره شبا"
                  value={values.shaba}
                />
                <TextInput
                  name="cardNumber"
                  placeholder="شماره کارت"
                  lableText="شماره کارت"
                  value={values.cardNumber}
                />
              </div>
              <div className="col-md-6">{/* <ListTable columns={} /> */}</div>
            </div>
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
}

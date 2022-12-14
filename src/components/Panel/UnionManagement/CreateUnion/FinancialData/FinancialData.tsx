import React, { useState } from "react";
import { Formik } from "formik";
import { FormikProps } from "formik";
import { Form } from "formik";
import { TextInput } from "../../../../common/Form";
import { ListTable } from "../../../../common/ListTable/ListTable";
import PrimaryButton from "../../../../common/Buttons/PrimaryButton/PrimaryButton";
import { UnionFinancialDataValidation } from "../../../../../core/validations/union-financialData.validation";
import BasicSelectOption from "../../../../common/Form/SelectOptionComponent/BasicSelectOption/BasicSelectOption";
import { BankAccountTypeData } from "../../../../../core/data/account-type.data";
import { useParams } from "react-router-dom";
import { useSetUnionBankData } from "../../../../../core/services/api/setUnion.api";
import { showToast } from "../../../../../core/utils";
import { ToastTypes } from "../../../../../core/enums";
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
  const { id } = useParams<any>();
  const setUnionBankData = useSetUnionBankData();
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
    const obj = {
      parentId: id,
      items: [
        {
          bankAccountType: values.accountType.value,
          bankShabaNumber: values.shaba,
          bankAcountNumber: values.accountNumber,
          cardNumber: values.cardNumber,
          bankName: values.bankName,
          bankBranchName: values.bankBranchName,
          bankBranchCode: values.bankBranchCode,
        },
      ],
    };
    console.log(obj);
    setUnionBankData.mutate(obj, {
      onSettled: (v) => {
        // console.log(v);
        showToast(["?????????????? ???? ???????????? ?????? ????"], ToastTypes.success);
      },
    });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={UnionFinancialDataValidation}
      >
        {({ errors, touched, values }: FormikProps<any>) => (
          <Form>
            <div className="row">
              <div className="col-md-6">
                <TextInput
                  name="bankName"
                  placeholder="?????? ????????"
                  lableText="?????? ????????"
                  value={values.bankName}
                />
                <BasicSelectOption
                  name="accountType"
                  placeHolder="?????? ????????"
                  lableText="?????? ????????"
                  data={BankAccountTypeData}
                  panelStyle
                />
                <TextInput
                  name="bankBranchName"
                  placeholder="?????? ????????"
                  lableText="?????? ????????"
                  value={values.bankBranchName}
                />
                <TextInput
                  name="bankBranchCode"
                  placeholder="???? ????????"
                  lableText="???? ????????"
                  value={values.bankBranchCode}
                />
                <TextInput
                  name="accountNumber"
                  placeholder="?????????? ????????"
                  lableText="?????????? ????????"
                  value={values.accountNumber}
                />
                <TextInput
                  name="shaba"
                  placeholder="?????????? ??????"
                  lableText="?????????? ??????"
                  value={values.shaba}
                />
                <TextInput
                  name="cardNumber"
                  placeholder="?????????? ????????"
                  lableText="?????????? ????????"
                  value={values.cardNumber}
                />
              </div>
              <div className="col-md-6">{/* <ListTable columns={} /> */}</div>
            </div>
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
          </Form>
        )}
      </Formik>
    </>
  );
}

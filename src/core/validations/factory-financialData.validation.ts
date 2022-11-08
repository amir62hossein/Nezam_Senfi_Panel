import * as Yup from "yup";
export const FactoryFinancialDataValidation = Yup.object().shape({
  bankName: Yup.string().nullable(),
  accountType: Yup.string().nullable(),
  accountNumber: Yup.string().nullable(),
  shaba: Yup.string().nullable(),
  cardNumber: Yup.string().nullable(),
});

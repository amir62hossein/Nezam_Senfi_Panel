import * as Yup from "yup";
export const ImporterFinancialDataValidation = Yup.object().shape({
  bankName: Yup.string().nullable(),
  accountType: Yup.number().nullable(),
  accountNumber: Yup.string().nullable(),
  shaba: Yup.string().nullable(),
  cardNumber: Yup.string().nullable(),
});

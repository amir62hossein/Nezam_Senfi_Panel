import * as Yup from "yup";
export const SellerDetailsValidation = Yup.object().shape({
  sellerName: Yup.string().nullable(),
  sellerType: Yup.string().nullable(),
  nationalCode: Yup.string().nullable(),
  economicalCode: Yup.string().nullable(),
  parvaneCode: Yup.string().nullable(),
  parvaneValidDate: Yup.string().nullable(),
  managerNationalCode: Yup.string().nullable(),
});

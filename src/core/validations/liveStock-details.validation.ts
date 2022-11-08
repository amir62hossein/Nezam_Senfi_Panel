import * as Yup from "yup";

export const LiveStockDetailsValidation = Yup.object().shape({
  liveStockName: Yup.string().nullable(),
  liveStockType: Yup.string().nullable(),
  nationalCode: Yup.string().nullable(),
  economicalCode: Yup.string().nullable(),
  parvaneCode: Yup.string().nullable(),
  parvaneValidDate: Yup.string().nullable(),
  managerNationalCode: Yup.string().nullable(),
});

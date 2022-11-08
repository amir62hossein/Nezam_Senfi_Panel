import * as Yup from "yup";
export const TaAvoniDetailsValidation = Yup.object().shape({
  taAvoniName: Yup.string().nullable(),
  taAvoniType: Yup.string().nullable(),
  nationalCode: Yup.string().nullable(),
  economicalCode: Yup.string().nullable(),
  parvaneCode: Yup.string().nullable(),
  parvaneValidDate: Yup.string().nullable(),
  managerNationalCode: Yup.string().nullable(),
});

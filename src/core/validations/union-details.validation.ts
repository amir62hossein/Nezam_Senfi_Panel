import * as Yup from "yup";
export const UnionDetailsValidation = Yup.object().shape({
  unionName: Yup.string().nullable(),
  unionType: Yup.string().nullable(),
  nationalCode: Yup.string().nullable(),
  economicalCode: Yup.string().nullable(),
  parvaneCode: Yup.string().nullable(),
  parvaneValidDate: Yup.string().nullable(),
  managerNationalCode: Yup.string().nullable(),
});

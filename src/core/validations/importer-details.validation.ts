import * as Yup from "yup";
export const ImporterDetailsValidation = Yup.object().shape({
  importerName: Yup.string().nullable(),
  importerType: Yup.string().nullable(),
  nationalCode: Yup.string().nullable(),
  economicalCode: Yup.string().nullable(),
  parvaneCode: Yup.string().nullable(),
  parvaneValidDate: Yup.string().nullable(),
  managerNationalCode: Yup.string().nullable(),
});

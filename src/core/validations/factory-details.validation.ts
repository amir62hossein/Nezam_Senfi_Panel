import * as Yup from "yup";
export const FactoryDetailsValidation = Yup.object().shape({
  // factoryCode: Yup.number().nullable(),
  factoryName: Yup.string().nullable(),
  factoryType: Yup.string().nullable(),
  nationalCode: Yup.string().nullable(),
  economicalCode: Yup.string().nullable(),
  parvaneCode: Yup.string().nullable(),
  parvaneValidDate: Yup.string().nullable(),
  managerNationalCode: Yup.string().nullable(),
});

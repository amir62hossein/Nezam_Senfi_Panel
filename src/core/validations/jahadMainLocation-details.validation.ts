import * as Yup from "yup";

export const JahadMainLocationDetailsValidation = Yup.object().shape({
  provinceId: Yup.string().nullable(),
  managerNationalCode: Yup.string().nullable(),
  managerName: Yup.string().nullable(),
});

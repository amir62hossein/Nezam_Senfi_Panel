import * as Yup from "yup";

export const JahadProvinceDetailsValidation = Yup.object().shape({
  provinceId: Yup.string().nullable(),
  managerName: Yup.string().nullable(),
  managerNationalCode: Yup.string().nullable(),
});

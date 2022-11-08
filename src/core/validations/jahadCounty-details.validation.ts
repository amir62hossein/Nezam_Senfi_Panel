import * as Yup from "yup";

const JahadDetailsValidation = Yup.object().shape({
  managerNationalCode: Yup.string().nullable(),
  provinceId: Yup.string().nullable(),
  provinceName: Yup.string().nullable(),
  countyId: Yup.string().nullable(),
  cityOrVillage: Yup.string().nullable(),
  managerName: Yup.string().nullable(),
});

export { JahadDetailsValidation };

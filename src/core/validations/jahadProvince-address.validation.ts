import * as Yup from "yup";

export const JahadProvinceAddressValidation = Yup.object().shape({
  provinceId: Yup.string().required("این فیلد باید پر شود!").nullable(),
  countyId: Yup.string().required("این فیلد باید پر شود!").nullable(),
  cityOrVillageId: Yup.string().required("این فیلد باید پر شود!").nullable(),
  address: Yup.string().required("این فیلد باید پر شود!").nullable(),
  postalCode: Yup.string().required("این فیلد باید پر شود!").nullable(),
});

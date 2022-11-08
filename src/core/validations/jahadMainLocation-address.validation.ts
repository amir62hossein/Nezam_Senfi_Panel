import * as Yup from "yup";

export const JahadMainLocationAddressValidation = Yup.object().shape({
  provinceId: Yup.string().required("این فیلد باید پر شود!").nullable(),
  countyId: Yup.string().required("این فیلد باید پر شود!").nullable(),
  cityOrVillage: Yup.string().required("این فیلد باید پر شود!").nullable(),
  address: Yup.string().required("این فیلد باید پر شود!").nullable(),
  postalCode: Yup.string().required("این فیلد باید پر شود!").nullable(),
});

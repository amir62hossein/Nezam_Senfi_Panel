import * as Yup from "yup";

const JahadAddressValidation = Yup.object().shape({
  provinceId: Yup.string().required("این فیلد باید پر شود!").nullable(),
  countyId: Yup.string().required("این فیلد باید پر شود!").nullable(),
  cityOrVillageId: Yup.string().required("این فیلد باید پر شود!").nullable(),
  address: Yup.string().required("این فیلد باید پر شود!").nullable(),
  postalCode: Yup.string().required("این فیلد باید پر شود!").nullable(),
});

export { JahadAddressValidation };

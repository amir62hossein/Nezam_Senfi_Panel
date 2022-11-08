import * as Yup from "yup";

const FactoryContactUsValidation = Yup.object().shape({
  contactNumber1: Yup.string().required("این فیلد باید پر شود!").nullable(),
  contactNumber2: Yup.string().required("این فیلد باید پر شود!").nullable(),
  faxNumber: Yup.string().required("این فیلد باید پر شود!").nullable(),
  email: Yup.string().email().required("این فیلد باید پر شود!").nullable(),
  websiteAddress: Yup.string().required("این فیلد باید پر شود!").nullable(),
  telegram: Yup.string().required("این فیلد باید پر شود!").nullable(),
  instagram: Yup.string().required("این فیلد باید پر شود!").nullable(),
  whatsapp: Yup.string().required("این فیلد باید پر شود!").nullable(),
  twitter: Yup.string().required("این فیلد باید پر شود!").nullable(),
});

export { FactoryContactUsValidation };

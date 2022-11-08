import * as Yup from "yup";

const selectOptionValidation = Yup.object().shape({
  value: Yup.number(),
  label: Yup.string().nullable(true),
});

const RegisterCodeInputValidation = Yup.object().shape({
  username: Yup.string().required("این فیلد باید پر شود!"),
  name: Yup.string().required("این فیلد باید پر شود!"),
  lastName: Yup.string().required("این فیلد باید پر شود!"),
  fatherName: Yup.string().nullable(true),
  birthCertificatId: Yup.string().nullable(true),
  birthCertificatIssuedBy: Yup.string().nullable(true),
  birthDateAsShamsi: Yup.string().nullable(true),
  mobileNumber2: Yup.string().nullable(true),
  phoneNumber: Yup.string().nullable(true),
  phoneNumber2: Yup.string().nullable(true),
  faxNumber: Yup.string().nullable(true),
  faxNumber2: Yup.string().nullable(true),
  maritalStatus: selectOptionValidation.nullable(true),
  gender: selectOptionValidation.nullable(true),
  educationStatus: selectOptionValidation.nullable(true),
  dutySystemStatus: selectOptionValidation.nullable(true),
  password: Yup.string().required("این فیلد باید پر شود!"),
  email: Yup.string().nullable(true),
  // securityStamp: Yup.string().nullable(true),
  cityOrVillageId: selectOptionValidation.nullable(true),
});

export { RegisterCodeInputValidation };

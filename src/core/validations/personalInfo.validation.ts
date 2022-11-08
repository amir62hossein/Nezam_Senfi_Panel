import * as Yup from "yup";

const PersonalInfoValidation = Yup.object().shape({
  firstName: Yup.string().required("این فیلد باید پر شود!").nullable(true),
  lastName: Yup.string().required("این فیلد باید پر شود!").nullable(true),
  fatherName: Yup.string().nullable(true),
  gender: Yup.string().required("این فیلد باید پر شود!").nullable(true),
  nationalCode: Yup.string().nullable(true),
  birthCertificateId: Yup.string().nullable(true),
  birthCertificateIssueDate: Yup.string().nullable(true),
  birthDate: Yup.string().nullable(true),
  maritalStatus: Yup.string().required("این فیلد باید پر شود!").nullable(true),
  mobileNumber: Yup.string().nullable(true),
  mobileNumber2: Yup.string().nullable(true),
  phoneNumber: Yup.string().nullable(true),
  phoneNumber2: Yup.string().nullable(true),
  fax: Yup.string().nullable(true),
  fax2: Yup.string().nullable(true),
  educationStatus: Yup.string()
    // .required("این فیلد باید پر شود!")
    .nullable(true),
  educationField: Yup.string()
    // .required("این فیلد باید پر شود!")
    .nullable(true),
  dutySystemStatus: Yup.string()
    // .required("این فیلد باید پر شود!")
    .nullable(true),
  endCardNumber: Yup.string().nullable(true),
  endDate: Yup.string().nullable(true),
  insuranceStatus: Yup.string().nullable(true),
  insuranceType: Yup.string().nullable(true),
  insuranceHistory: Yup.string().nullable(true),
  livingProvince: Yup.string().nullable(true),
  livingCounty: Yup.string().nullable(true),
  livingAddress: Yup.string().nullable(true),
  livingPostalCode: Yup.string().nullable(true),
  workProvince: Yup.string().nullable(true),
  workCounty: Yup.string().nullable(true),
  workAddress: Yup.string().nullable(true),
  workPostalCode: Yup.string().nullable(true),
  email: Yup.string().required("این فیلد باید پر شود!").nullable(true),
  password: Yup.string().required("این فیلد باید پر شود!").nullable(true),
});

export { PersonalInfoValidation };

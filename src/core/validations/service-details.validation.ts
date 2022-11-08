import * as Yup from "yup";
export const ServiceDetailsValidation = Yup.object().shape({
  serviceCenterName: Yup.string().nullable(),
  serviceType: Yup.string().nullable(),
  nationalCode: Yup.string().nullable(),
  economicalCode: Yup.string().nullable(),
  parvaneCode: Yup.string().nullable(),
  parvaneValidDate: Yup.string().nullable(),
  managerNationalCode: Yup.string().nullable(),
});

import * as Yup from "yup";

const SellerAddressValidation = Yup.object().shape({
  provinceId: Yup.string().nullable(),
  countyId: Yup.string().nullable(),
  cityOrVillageId: Yup.string().nullable(),
  address: Yup.string().nullable(),
  postalCode: Yup.string().nullable(),
});

export { SellerAddressValidation };

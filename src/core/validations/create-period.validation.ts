import * as Yup from "yup";

export const CreatePeriodValidation = Yup.object().shape({
  periodTitle: Yup.string().nullable(),
});

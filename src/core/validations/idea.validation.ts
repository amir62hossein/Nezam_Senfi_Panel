import * as Yup from "yup";
export const IdeaValidate = Yup.object().shape({
  Title: Yup.string().required("این فیلد باید پر شود!"),
  Description: Yup.string()
    .min(50, "عبارت وارد شده کوتاه است!")
    .required("این فیلد باید پر شود!"),
  CategoryId: Yup.object()
    .shape({
      value: Yup.string(),
      label: Yup.string().nullable(),
    })
    .required("این فیلد باید پر شود!")
    .typeError("لطفا یکی از گزینه ها را انتخاب کنید!"),
});

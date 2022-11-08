import * as Yup from "yup";
export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "عبارت وارد شده کوتاه است!")
    .max(50, "طول عبارت وارد شده بیشتر از حد مجاز است!")
    .required("این فیلد باید پر شود!"),
  password: Yup.string()
    .min(2, "عبارت وارد شده کوتاه است!")
    .max(50, "طول عبارت وارد شده بیشتر از حد مجاز است!")
    .required("این فیلد باید پر شود!"),
});

import * as Yup from "yup";

const NewEventValidation = Yup.object().shape({
  title: Yup.string()
    .required("این فیلد باید پر شود!"),
    startDate: Yup.string()
    .required("این فیلد باید پر شود!"),
    endDate: Yup.string()
    .required("این فیلد باید پر شود!")
});


export { NewEventValidation };
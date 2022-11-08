import * as Yup from "yup";

const NewSprintValidation = Yup.object().shape({
    title: Yup.string()
    .required("این فیلد باید پر شود!"),
    startDate: Yup.string()
    .required("این فیلد باید پر شود!"),
    endDate: Yup.string()
    .required("این فیلد باید پر شود!"),
    description: Yup.string()
    .required("این فیلد باید پر شود!"),
    startupDeskId: Yup.string()
    .required("این فیلد باید پر شود!")
});


export { NewSprintValidation };
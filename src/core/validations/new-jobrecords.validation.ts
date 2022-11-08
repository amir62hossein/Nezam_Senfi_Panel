import * as Yup from "yup";

const NewJobRecordsValidation = Yup.object().shape({
    position: Yup.string()
    .required("این فیلد باید پر شود!"),
    startDate: Yup.string()
    .required("این فیلد باید پر شود!"),
    endDate: Yup.string()
    .required("این فیلد باید پر شود!"),
    companyName: Yup.string()
    .required("این فیلد باید پر شود!"),
    inofrmation: Yup.string()
    .required("این فیلد باید پر شود!"),

});


export { NewJobRecordsValidation };
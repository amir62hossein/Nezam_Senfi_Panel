import * as Yup from "yup";

const NewSkillValidation = Yup.object().shape({
    skillName: Yup.string()
    .required("این فیلد باید پر شود!"),
    percentage: Yup.string()
    .required("این فیلد باید پر شود!")
});


export { NewSkillValidation };
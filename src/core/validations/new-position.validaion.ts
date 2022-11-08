import * as Yup from "yup";

const NewPositionValidation = Yup.object().shape({
  title: Yup.string()
    .required("این فیلد باید پر شود!")
});


export { NewPositionValidation };

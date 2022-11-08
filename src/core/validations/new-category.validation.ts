import * as Yup from "yup";

const NewCategoryValidate = Yup.object().shape({
  title: Yup.string()
    .required("این فیلد باید پر شود!")
});


export { NewCategoryValidate };

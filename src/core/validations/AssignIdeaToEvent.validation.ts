
import * as Yup from "yup";

const AssignEventToIdeaValidation = Yup.object().shape({
    eventList: Yup.string()
    .required("این فیلد باید پر شود!"),

});


export { AssignEventToIdeaValidation };
import *  as Yup from 'yup'
import { CheckMaximumDate, isLimitedNumberRegex, isPersian, isPersianNullable } from '../utils';

export const ProfileValidate = Yup.object().shape({
  gender: Yup.object()
    .test("", "یک گزینه انتخاب کنید", (obj: any) => obj.value > 0)
    .required()
    .typeError("لطفا یک گزینه را انتخاب کنید"),
  dutySystemState: Yup.object().when("gender", (gender: any, schema: any) => {
    return gender.value <= 1
      ? schema
      : schema
          .test("", "یک گزینه انتخاب کنید", (obj: any) => obj.value > 0)
          .required("لطفا یک گزینه را انتخاب کنید")
          .typeError("لطفا یک گزینه را انتخاب کنید");
  }),
  educationLevel: Yup.object()
    .test("", "یک گزینه انتخاب کنید", (obj: any) => obj.value > 0)
    .required("یک گزینه را انتخاب کنید")
    .typeError("لطفا یک گزینه را انتخاب کنید"),
  educationFiled: Yup.object()
    .shape({
      value: Yup.number(),
      label: Yup.string().nullable(),
    })
    .when("educationLevel", (educationLevel: any, schema: any) => {
      return educationLevel.value < 7
        ? schema
            .required("لطفا یک گزینه را انتخاب کنید")
            .typeError("لطفا یک گزینه را انتخاب کنید")
        : schema
            .nullable()
            .notRequired()
            .typeError("لطفا رشته خود را انتخاب کنید");
    }),
  meli: Yup.string()
    .matches(isLimitedNumberRegex(10, 10), "کد ملی صحیح نیست")
    .required("کد ملی نباید خالی باشد")
    .typeError("لطفا کد ملی را درست وارد کنید"),
  name: Yup.string()
    .required("نام نباید خالی باشد")
    .matches(isPersian(), "نام را درست وارد کنید")
    .typeError("لطفا نام را درست وارد کنید"),
  lastName: Yup.string()
    .required("نام خانوادگی نباید خالی باشد")
    .matches(isPersian(), "نام خانوادگی را درست وارد کنید")
    .typeError("لطفا نام خانوادگی را درست وارد کنید"),
});
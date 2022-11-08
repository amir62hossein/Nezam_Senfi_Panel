import * as Yup from "yup";
export const AssignMembersValidate = Yup.object().shape({
  users: Yup.array()
    .of(
      Yup.object().shape(
        {
          positionId: Yup.object()
            .shape({
              value: Yup.string(),
              label: Yup.string().nullable(),
            })
            .when("otherPosition", (otherPosition: any, schema: any) => {
              if (!otherPosition) {
                return schema
                  .required("یک گزینه را انتخاب کنید")
                  .typeError("لطفا یکی از گزینه ها را انتخاب کنید!");
              }
              return schema.nullable().notRequired();
            }),
          userId: Yup.string()
            .required("لطفا نام کاربری را وارد کنید")
            .typeError("لطفا نام کاربری را درست وارد کنید"),
          memberAccess: Yup.object()
            .shape({
              value: Yup.number(),
              label: Yup.string().nullable(),
            })
            .required("این فیلد باید پر شود!")
            .typeError("لطفا یکی از گزینه ها را انتخاب کنید!"),
          otherPosition: Yup.string().when(
            "positionId",
            (positionId: any, schema: any) => {
              if (!positionId) {
                return schema
                  .required("یک گزینه را انتخاب کنید")
                  .typeError("لطفا یکی از گزینه ها را انتخاب کنید!");
              }
              return schema.nullable().notRequired();
            }
          ),
        },
        [["positionId", "otherPosition"]]
      )
    )
    .required("لطفا حداقل یک بازه را وارد کنید!")
    .typeError("لطفا حداقل یک بازه را وارد کنید!"),
});

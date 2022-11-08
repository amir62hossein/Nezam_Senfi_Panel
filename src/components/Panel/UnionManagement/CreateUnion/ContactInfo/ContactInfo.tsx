import React, { useState } from "react";
import { Formik } from "formik";
import { FormikProps } from "formik";
import { Form } from "formik";
import { TextInput } from "../../../../common/Form";
import PrimaryButton from "../../../../common/Buttons/PrimaryButton/PrimaryButton";
import { UnionContactUsValidation } from "./../../../../../core/validations/union-contactinfo.validation";
import { useHistory, useParams } from "react-router-dom";
import { useSetUnionContactData } from "../../../../../core/services/api/setUnion.api";
import { showToast } from "../../../../../core/utils";
import { ToastTypes } from "../../../../../core/enums";

type Props = {};
interface IFormTypes {
  contactNumber1: string | null;
  contactNumber2: string | null;
  faxNumber: string | null;
  email: string | null;
  websiteAddress: string | null;
  telegram: string | null;
  instagram: string | null;
  whatsapp: string | null;
  twitter: string | null;
}
export default function ContactInfo({}: Props) {
  const setUnionContactData = useSetUnionContactData();
  const history = useHistory();
  const { id } = useParams<any>();
  const [initialValues, setInitialValues] = useState<IFormTypes>({
    contactNumber1: null,
    contactNumber2: null,
    faxNumber: null,
    email: null,
    websiteAddress: null,
    telegram: null,
    instagram: null,
    whatsapp: null,
    twitter: null,
  });

  const onSubmit = (values: any) => {
    console.log(values);
    let obj: any = {
      phoneNumber: values.contactNumber1,
      phoneNumber2: values.contactNumber2,
      fax: values.faxNumber,
      // fax2:  ,
      email: values.email,
      webSite: values.websiteAddress,
      twitter: values.twitter,
      whatsapp: values.whatsapp,
      instagram: values.instagram,
      telegram: values.telegram,
    };
    if (id) {
      obj = { ...obj, id: id };
    }
    console.log(obj);
    setUnionContactData.mutate(obj, {
      onSuccess: (v) => {
        console.log(v);
        showToast(["اطلاعات با موفقیت ثبت شد"], ToastTypes.success);
        history.push("/UnionManagement/CreateUnion/UnionAddress/" + id);
      },
    });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={UnionContactUsValidation}
      >
        {({
          setFieldValue,
          errors,
          setFieldTouched,
          touched,
          values,
          handleChange,
        }: FormikProps<any>) => (
          <Form>
            <div className="row">
              <div className="col-md-6 pl-2">
                <TextInput
                  name="contactNumber1"
                  placeholder="شماره تماس 1"
                  lableText="شماره تماس 1"
                  value={values.contactNumber1}
                />
                <TextInput
                  name="contactNumber2"
                  placeholder="شماره تماس 2"
                  lableText="شماره تماس 2"
                  value={values.contactNumber2}
                />
                <TextInput
                  name="faxNumber"
                  placeholder="شماره فکس"
                  lableText="شماره فکس"
                  value={values.faxNumber}
                />
                <TextInput
                  name="email"
                  placeholder="آدرس ایمیل"
                  lableText="آدرس ایمیل"
                  value={values.email}
                />
                <TextInput
                  name="websiteAddress"
                  placeholder="آدرس وبسایت"
                  lableText="آدرس وبسایت"
                  value={values.websiteAddress}
                />
              </div>
              <div className="col-md-6 pl-2">
                <TextInput
                  name="telegram"
                  placeholder="تلگرام"
                  lableText="تلگرام"
                  value={values.telegram}
                />

                <TextInput
                  name="instagram"
                  placeholder="اینستاگرام"
                  lableText="اینستاگرام"
                  value={values.instagram}
                />

                <TextInput
                  name="whatsapp"
                  placeholder="واتس اپ"
                  lableText="واتس اپ"
                  value={values.whatsapp}
                />

                <TextInput
                  name="twitter"
                  placeholder="توییتر"
                  lableText="توییتر"
                  value={values.twitter}
                />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <PrimaryButton
                text="ثبت"
                type="submit"
                className="btn btn-primary px-0"
                style={{
                  maxWidth: "150px",
                  minWidth: "150px",
                  marginLeft: "10px",
                  color: "white",
                }}
              />
              <PrimaryButton
                text="انصراف"
                type="button"
                className="btn btn-danger px-0"
                style={{
                  maxWidth: "150px",
                  minWidth: "150px",
                  color: "white",
                }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

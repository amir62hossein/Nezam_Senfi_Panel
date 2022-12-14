import React, { useState } from "react";
import { Formik } from "formik";
import { FormikProps } from "formik";
import { Form } from "formik";
import { TextInput } from "../../../../common/Form";
import { FactoryContactUsValidation } from "../../../../../core/validations/factory-contactinfo.validation";
import PrimaryButton from "./../../../../common/Buttons/PrimaryButton/PrimaryButton";
import { useSetFactoryContactData } from "./../../../../../core/services/api/setFactoryData.api";

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
  const setFactoryContactData = useSetFactoryContactData();
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
    const obj = {
      phoneNumber: values.contactNumber1,
      phoneNumber2: values.contactNumber2,
      fax: values.faxNumber,
      email: values.email,
      webSite: values.websiteAddress,
      // telegram: null,
      // instagram: null,
      // whatsapp: null,
      // twitter: null,
    };
    console.log(obj);
    setFactoryContactData.mutate(obj, {
      onSuccess: (value) => {
        console.log(value);
      },
    });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={FactoryContactUsValidation}
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
                  placeholder="?????????? ???????? 1"
                  lableText="?????????? ???????? 1"
                  value={values.contactNumber1}
                />
                <TextInput
                  name="contactNumber2"
                  placeholder="?????????? ???????? 2"
                  lableText="?????????? ???????? 2"
                  value={values.contactNumber2}
                />
                <TextInput
                  name="faxNumber"
                  placeholder="?????????? ??????"
                  lableText="?????????? ??????"
                  value={values.faxNumber}
                />
                <TextInput
                  name="email"
                  placeholder="???????? ??????????"
                  lableText="???????? ??????????"
                  value={values.email}
                />
                <TextInput
                  name="websiteAddress"
                  placeholder="???????? ????????????"
                  lableText="???????? ????????????"
                  value={values.websiteAddress}
                />
              </div>
              <div className="col-md-6 pl-2">
                <TextInput
                  name="telegram"
                  placeholder="????????????"
                  lableText="????????????"
                  value={values.telegram}
                />

                <TextInput
                  name="instagram"
                  placeholder="????????????????????"
                  lableText="????????????????????"
                  value={values.instagram}
                />

                <TextInput
                  name="whatsapp"
                  placeholder="???????? ????"
                  lableText="???????? ????"
                  value={values.whatsapp}
                />

                <TextInput
                  name="twitter"
                  placeholder="????????????"
                  lableText="????????????"
                  value={values.twitter}
                />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <PrimaryButton
                isLoading={setFactoryContactData.isLoading}
                text="??????"
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
                text="????????????"
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

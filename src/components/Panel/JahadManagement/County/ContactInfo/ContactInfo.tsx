import React, { FC, useState } from "react";
import { Formik, Form, FormikProps } from "formik";
import { TextInput } from "../../../../common/Form/InputComponents/TextInputComponents/TextInput";
import { JahadContactUsValidation } from "../../../../../core/validations/jahadCounty-contact-info";
import Style from "./ContactInfo.module.scss";
import PrimaryButton from "../../../../common/Buttons/PrimaryButton/PrimaryButton";
interface IPropTypes {}
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

const ContactInfo: FC<IPropTypes> = ({}) => {
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
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={JahadContactUsValidation}
      >
        {({ errors, touched, values }: FormikProps<any>) => (
          <Form>
            <div className="row">
              <div className="col-md-6">
                <TextInput
                  name="contactNumber1"
                  placeholder="شماره تماس 1"
                  lableText="شماره تماس 1"
                  value={values.contactNumber1}
                  className={Style.halfInput}
                />
                <TextInput
                  name="contactNumber2"
                  placeholder="شماره تماس 2"
                  lableText="شماره تماس 2"
                  value={values.contactNumber2}
                  className={Style.halfInput}
                />
                <TextInput
                  name="faxNumber"
                  placeholder="شماره فکس"
                  lableText="شماره فکس"
                  value={values.faxNumber}
                  className={Style.halfInput}
                />
                <TextInput
                  name="email"
                  placeholder="آدرس ایمیل"
                  lableText="آدرس ایمیل"
                  value={values.email}
                  className={Style.halfInput}
                />
                <TextInput
                  name="websiteAddress"
                  placeholder="آدرس وبسایت"
                  lableText="آدرس وبسایت"
                  value={values.websiteAddress}
                  className={Style.halfInput}
                />
              </div>
              <div className="col-md-6">
                <TextInput
                  name="telegram"
                  placeholder="تلگرام"
                  lableText="تلگرام"
                  value={values.telegram}
                  className={Style.halfInput}
                />

                <TextInput
                  name="instagram"
                  placeholder="اینستاگرام"
                  lableText="اینستاگرام"
                  value={values.instagram}
                  className={Style.halfInput}
                />

                <TextInput
                  name="whatsapp"
                  placeholder="واتس اپ"
                  lableText="واتس اپ"
                  value={values.whatsapp}
                  className={Style.halfInput}
                />

                <TextInput
                  name="twitter"
                  placeholder="توییتر"
                  lableText="توییتر"
                  value={values.twitter}
                  className={Style.halfInput}
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
                style={{ maxWidth: "150px", minWidth: "150px", color: "white" }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { ContactInfo };

import { Form, Formik } from "formik";
import React, { FC} from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import { ToastTypes } from "../../../../core/enums";
import { useCreateEvent } from "../../../../core/services/api/Event.api";
import { showToast } from "../../../../core/utils";
import { ShamsiToIsoString } from "../../../../core/utils/shamsi-to-isostring.utils";
import { NewEventValidation } from "../../../../core/validations/new-event.validation";
import { ModernDatePicker, SubmitButton, TextInput } from "../../../common/Form";


interface IPropTypes {
}

interface IEvent { 
  title : string,
  startDate:string,
  endDate:string
}
const NewContainer: FC<IPropTypes> = ({}) => {


  const addMutation = useCreateEvent()
  
  const onSubmit = ( val : IEvent) => {
    let startDate =ShamsiToIsoString(val.startDate);
    let endDate =ShamsiToIsoString(val.endDate);

    const obj = {
      title: val.title,
      startDate: startDate,
      endDate: endDate,
    };

    addMutation.mutate(obj , {
      onSuccess: (val: any) => {
        showToast(["با موفقیت انجام شد."], ToastTypes.success);
      }
    })
  } 

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>افزودن رویداد</CardTitle>
        </CardHeader>
        <CardBody>
          {" "}
          <Formik
            initialValues={{ title: "", startDate: "", endDate: "" }}
            validationSchema={NewEventValidation}
            enableReinitialize={true}
            onSubmit={onSubmit}
          >
            {({ values, handleChange, setFieldError }) => {
              return (
                <Form>
                  <Row>
                    <Col md="4">
                      <TextInput
                        lableText="عنوان رویداد"
                        name="title"
                        placeholder="عنوان دسته را وارد کنید ..."
                        significant
                      />
                    </Col>
                    <Col md="4">
                      <ModernDatePicker
                        lableText="تاریخ شروع"
                        name="startDate"
                        placeholder="...تاریخ شروع را وارد کنید"
                        significant
                        hasMaximum={false}
                        
                      />
                    </Col>
                    <Col md="4">
                      <ModernDatePicker
                        lableText="تاریخ پایان"
                        name="endDate"
                        placeholder="...تاریخ پایان را وارد کنید"
                        significant
                        hasMaximum={false}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <SubmitButton
                        isLoading={addMutation.isLoading}
                        schema={NewEventValidation}
                        values={values}
                      />
                    </Col>
                  </Row>
                </Form>
              );
            }}
          </Formik>
        </CardBody>
      </Card>
    </>
  );
};

export { NewContainer };

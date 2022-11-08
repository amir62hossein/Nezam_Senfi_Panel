import React, { useContext, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { Col, Modal, Row, ModalBody, ModalHeader } from "reactstrap";
import { useUpdateEvent } from "../../../../../../core/services/api/Event.api";
import { refetchContext } from "../../../../../../core/utils/context/EventContext";
import { ShamsiToIsoString } from "../../../../../../core/utils/shamsi-to-isostring.utils";
import { showToast } from "../../../../../../core/utils";
import { ToastTypes } from "../../../../../../core/enums";
import { NewEventValidation } from "../../../../../../core/validations/new-event.validation";
import { ModernDatePicker, SubmitButton, TextInput } from "../../../../../common/Form";



interface IPropTypes {
  isOpen: boolean;
  toggleModal: () => void;
  backdrop: boolean;
  currentId: number;
  data: any;
}

const EditModal: React.FC<IPropTypes> = ({
  isOpen,
  toggleModal,
  backdrop,
  currentId,
  data,
}) => {

  const editMutation = useUpdateEvent()

  const [initialValue , setInitialValues] = useState<any>({
    title: "",
    startDate: "",
    endDate: "",
  });


  const { refetchEvent, setRefetchEvent } = useContext(refetchContext);

    useEffect(() => {
      if (currentId) {
        setInitialValues({
          title: data.title,
          startDate: "",
          endDate: "",
        });
      }
    }, [currentId, isOpen]);
  
    const onSubmit = (values:any) => {
      let startDate =ShamsiToIsoString(values.startDate);
      let endDate =ShamsiToIsoString(values.endDate);
  
      const Obj = {
        id : data.id,
        title: values.title,
        startDate,
        endDate,
      };
  
      editMutation.mutate(Obj, {
        onSuccess: (val: any) => {
          toggleModal();
          showToast(["با موفقیت انجام شد."], ToastTypes.success);
          const newEvent = { ...refetchEvent };
          newEvent.eventList = !newEvent.eventList;
          setRefetchEvent(newEvent);
        },
      });
      
    };

  return (
    <>
      <Modal
        isOpen={isOpen}
        toggle={toggleModal}
        className="modal-dialog-centered"
        backdrop={backdrop}
      >
        <ModalHeader toggle={toggleModal}>ویرایش</ModalHeader>
        <ModalBody>

        <Formik
        enableReinitialize={true}
        initialValues={initialValue}
        validationSchema={NewEventValidation}
        onSubmit={onSubmit}
      >
        {({ values , setFieldValue }) => {
          return (
            <Form>
              <>
                <Row>
                  <Col>
                    <TextInput
                      lableText="عنوان رویداد"
                      name="title"
                      placeholder="عنوان دسته را وارد کنید ..."
                      significant
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ModernDatePicker
                      lableText="تاریخ شروع"
                      name="startDate"
                      placeholder="...تاریخ شروع را وارد کنید"
                      significant
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ModernDatePicker
                      lableText="تاریخ پایان"
                      name="endDate"
                      placeholder="...تاریخ پایان را وارد کنید"
                      significant
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <SubmitButton
                      isLoading={editMutation.isLoading}
                      initialValue={initialValue}
                      schema={NewEventValidation}
                      values={values}
                      isDisabled={false}
                    />
                  </Col>
                </Row>
              </>
            </Form>
          );
        }}
      </Formik>

        </ModalBody>
        </Modal>
    </>
  );
};

export { EditModal };

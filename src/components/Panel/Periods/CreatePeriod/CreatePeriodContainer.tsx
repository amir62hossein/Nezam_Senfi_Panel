import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  TabContent,
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
} from "reactstrap";
import classNames from "classnames";
import { isSameString } from "../../../../core/utils/same-string.utils";
import { Formik, Form, FormikProps } from "formik";
import BasicSelectOption from "../../../common/Form/SelectOptionComponent/BasicSelectOption/BasicSelectOption";
import { InpuLable, ModernDatePicker, TextInput } from "../../../common/Form";
import PrimaryButton from "../../../common/Buttons/PrimaryButton/PrimaryButton";
import { CreatePeriodValidation } from "../../../../core/validations/create-period.validation";
type Props = {};
interface IFormTypes {
  periodTitle: string | null;
}
export function CreatePeriodContainer({}: Props) {
  const location = useLocation();
  const history = useHistory();
  const [toggle, setToggle] = useState<string>("1");
  const [initialValues, setInitialValues] = useState<IFormTypes>({
    periodTitle: null,
  });
  const onSubmit = (values: IFormTypes) => {
    console.log(values);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle></CardTitle>
      </CardHeader>
      <CardBody>
        <Nav tabs className="nav-justified">
          <NavItem>
            <NavLink
              className={classNames({
                active: isSameString(
                  location.pathname,
                  `/Periods/CreatePeriod`
                ),
              })}
              onClick={() => {
                history.push(`/Periods/CreatePeriod`);
              }}
            >
              ثبت دوره
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="py-50" activeTab={toggle}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={CreatePeriodValidation}
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
                      name="periodTitle"
                      placeholder="عنوان دوره"
                      lableText="عنوان دوره"
                      value={values.periodTitle}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <PrimaryButton
                    // isLoading={setFactoryBasicData.isLoading}
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
        </TabContent>
      </CardBody>
    </Card>
  );
}

import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Alert, Button, Card, CardBody, CardHeader, CardTitle, Col, FormGroup, Input, InputGroup, InputGroupAddon, Row, Spinner } from "reactstrap";
import { useAddProvinceAdmin, useGetUserInfoByNationalCode } from "../../../../../core/services/api/account.api";
import { showToast } from "../../../../../core/utils";
import { InpuLable, SubmitButton } from "../../../../common/Form";
import { TwoColumn } from "../../../../common/Wrapper/ColumnWrapper/TwoColumn/TwoColumn";
import Select from "react-select";
import { Search } from "react-feather";

interface IPropTypes {
}

const ManageAdminsContainer: React.FC<IPropTypes> = ({}) => {
 
  const [initialValues, setInitialValues] = useState<any>({
    users: null,
    roles: null,
    userSearch: "",
  });
  const [userInfo, setUserInfo] = React.useState<any>(null);

  const getUserByNationalIdMutation = useGetUserInfoByNationalCode();

  const setMutation = useAddProvinceAdmin();

  const { id } = useParams<any>()

  const onSubmit = (value: any, { resetForm, setFieldValue }: any) => {
    if (!userInfo) {
      return showToast(["ابتدا از وجود کاربر مطمئن شوید!"], "error");
    }


    const obj: any = {
      userId: userInfo.id,
      locationId: id
    };

    setMutation.mutate(obj, {
      onSuccess: (val: any) => {
        showToast(["با موفقیت انجام شد!"], "success");
      },
    });
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>افزودن ادمین</CardTitle>
        </CardHeader>
        <CardBody>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            // validationSchema={AddUserToGuild}
            enableReinitialize
          >
            {({
              setFieldValue,
              errors,
              setFieldTouched,
              touched,
              values,
              handleChange,
            }) => {
              return (
                <Form>
                  <CardTitle>افزودن کاربر</CardTitle>
                  <TwoColumn>
                    <FormGroup>
                      <FormGroup>
                        <InpuLable lableText="نام کاربری" significant={true} />
                        <InputGroup>
                          <Input
                            value={values.userSearch}
                            placeholder="کد ملی کاربر را وارد کنید"
                            type="text"
                            name="userSearch"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          />
                          <InputGroupAddon dir="ltr" addonType="append">
                            <Button
                              onClick={() => {
                                setUserInfo("");
                                setFieldValue("roles", null);
                                getUserByNationalIdMutation.mutate(
                                  values.userSearch,
                                  {
                                    onSuccess: (val: any) => {
                                      if (val.data && val.data.result) {
                                        const user = val.data.result;
                                        const userObj = {
                                          id: user.id,
                                          fullName: `${user.name} ${user.lastName}`,
                                          email: user.email,
                                        };
                                        setUserInfo(userObj);
                                      }
                                    },
                                  }
                                );
                              }}
                              color="primary"
                            >
                              {getUserByNationalIdMutation.isLoading ? (
                                <Spinner
                                  style={{
                                    padding: "0 !important",
                                    margin: "0 !important",
                                  }}
                                  color="white"
                                  size="sm"
                                />
                              ) : (
                                <Search size={15} />
                              )}
                            </Button>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>

                      {userInfo && (
                        <Alert color="success">
                          <p>اطلاعات کاربر:</p>
                          <p>نام و نام خانوادگی : {userInfo.fullName} </p>
                          <p>ایمیل : {userInfo.email} </p>
                          {/* <p>
                        <Link
                          target="_blank"
                          to={`/UserList/RealUsersList/${userInfo.id}`}
                        >
                          <Button size="md" color="warning" onClick={() => {}}>
                            نمایش جزئیات کاربر &nbsp;
                          </Button>
                        </Link>
                      </p> */}
                        </Alert>
                      )}
                    </FormGroup>
                  </TwoColumn>

                  <SubmitButton
                    isLoading={setMutation.isLoading}
                    btnText="افزودن"
                    // schema={AddUserToGuild}
                    values={values}
                    //initialValue={initialValues}
                  />
                </Form>
              );
            }}
          </Formik>
        </CardBody>
      </Card>
    </>
  );
};

export { ManageAdminsContainer };


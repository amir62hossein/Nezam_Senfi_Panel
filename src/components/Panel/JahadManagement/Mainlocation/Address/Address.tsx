import React, { FC, useState, useEffect } from "react";
import { Formik, Form, FormikProps } from "formik";
import { TextInput } from "../../../../common/Form/InputComponents/TextInputComponents/TextInput";
import PrimaryButton from "../../../../common/Buttons/PrimaryButton/PrimaryButton";
import Style from "./MainLocationAddress.module.scss";
import { MapDetails } from "../../../../common/Map/MapDetails/MapDetails";
import { JahadMainLocationAddressValidation } from "./../../../../../core/validations/jahadMainLocation-address.validation";
import { TextArea } from "../../../../common/Form";
import { useGetProvincesForDropDown } from "../../../../../core/services/api/getProvince.api";
import { useGetCounty } from "../../../../../core/services/api/county.api";
import { useGetCityOrVillage } from "../../../../../core/services/api/cityOrVillage.api";
import { Spinner } from "reactstrap";
import BasicSelectOption from "../../../../common/Form/SelectOptionComponent/BasicSelectOption/BasicSelectOption";
interface IPropTypes {}
interface IFormTypes {
  province: string | null;
  county: string | null;
  cityOrVillage: string | null;
  address: string | null;
  postalCode: string | null;
}

interface IProvinceType {
  id: number;
  title: string;
}
interface ICountyType {
  id: number;
  title: string;
}
interface ICityOrVillageType {
  id: number;
  title: string;
}
const Address: FC<IPropTypes> = ({}) => {
  const getProvincesForDropDown = useGetProvincesForDropDown();
  const getCounty = useGetCounty();
  const getCityOrVillage = useGetCityOrVillage();

  const [counties, setCounties] = useState<ICountyType[]>();
  const [cityOrVillage, setCityOrVillage] = useState<ICityOrVillageType[]>();
  const [provinces, setProvinces] = useState<IProvinceType[]>();

  const [initialValues, setInitialValues] = useState<IFormTypes>({
    province: null,
    county: null,
    cityOrVillage: null,
    address: null,
    postalCode: null,
  });
  useEffect(() => {
    getProvincesForDropDown.mutate(undefined, {
      onSuccess: (values) => {
        const mappedData = values.data.result.map((item: IProvinceType) => {
          return {
            value: item.id,
            label: item.title,
          };
        });
        setProvinces(mappedData);
      },
    });
  }, []);
  const onProvinceChange = (value: any) => {
    if (typeof value.value == "number" && typeof value.label == "string") {
      getCounty.mutate(value.value, {
        onSuccess: (value) => {
          const mappedCounties = value.data.result.map(
            (value: ICountyType) => ({
              value: value.id,
              label: value.title,
            })
          );
          setCounties(mappedCounties);
        },
      });
    }
  };
  const onCountyChange = (value: any) => {
    if (typeof value.value == "number" && typeof value.label == "string") {
      getCityOrVillage.mutate(value.value, {
        onSuccess: (value) => {
          const mappedCityOrVillage = value.data.result.map(
            (value: ICountyType) => ({
              value: value.id,
              label: value.title,
            })
          );
          setCityOrVillage(mappedCityOrVillage);
        },
      });
    }
  };
  const onSubmit = (values: any) => {
    console.log(values);
  };
  if (getProvincesForDropDown.isLoading)
    return (
      <Spinner size="lg" style={{ margin: "100px auto", display: "block" }} />
    );
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={JahadMainLocationAddressValidation}
      >
        {({ errors, touched, values }: FormikProps<any>) => (
          <Form>
            <div className="row">
              <div className="col-md-6">
                {provinces && (
                  <BasicSelectOption
                    name="provinceId"
                    placeHolder="??????????"
                    data={provinces}
                    panelStyle
                    onChange={(value) => onProvinceChange(value)}
                  />
                )}
                <BasicSelectOption
                  name="countyId"
                  placeHolder="??????????????"
                  data={counties ? counties : [{ value: 0, lable: "" }]}
                  panelStyle
                  onChange={(value) => counties && onCountyChange(value)}
                  isDisabled={!counties}
                />
                <BasicSelectOption
                  name="cityOrVillageId"
                  placeHolder="?????? ???? ??????????"
                  data={
                    cityOrVillage ? cityOrVillage : [{ value: 0, lable: "" }]
                  }
                  panelStyle
                  isDisabled={!cityOrVillage}
                />
                <TextArea
                  name="address"
                  lableText="????????"
                  placeholder="????????"
                  value={values.address}
                />
                <TextInput
                  name="postalCode"
                  placeholder="???? ????????"
                  lableText="???? ????????"
                  value={values.postalCode}
                />
              </div>
              <div className={`col-md-6 ${Style.MapHolder}`}>
                <MapDetails onClick={(lat, lng) => console.log(lat, lng)} />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <div className="d-flex justify-content-end">
                <PrimaryButton
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
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { Address };

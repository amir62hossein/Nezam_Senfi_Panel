import React, { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import { FormikProps } from "formik";
import { MapDetails } from "../../../../common/Map/MapDetails/MapDetails";
import { Spinner } from "reactstrap";
import { TextArea, TextInput } from "../../../../common/Form";
import { useGetProvinces } from "../../../../../core/services/api/provinces.api";
import { useGetCounty } from "../../../../../core/services/api/county.api";
import { useGetCityOrVillage } from "../../../../../core/services/api/cityOrVillage.api";
import BasicSelectOption from "../../../../common/Form/SelectOptionComponent/BasicSelectOption/BasicSelectOption";
import PrimaryButton from "../../../../common/Buttons/PrimaryButton/PrimaryButton";
import { SellerAddressValidation } from "../../../../../core/validations/seller-address.validation";
import Style from "./SellerAddress.module.scss";
type Props = {};
interface IFormTypes {
  provinceId: string | null;
  countyId: string | null;
  cityOrVillageId: string | null;
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
export default function UnionAddress({}: Props) {
  const [initialValues, setInitialValues] = useState<IFormTypes>({
    provinceId: null,
    countyId: null,
    cityOrVillageId: null,
    address: null,
    postalCode: null,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [provinces, setProvinces] = useState<IProvinceType[]>();
  const [counties, setCounties] = useState<ICountyType[]>();
  const [cityOrVillage, setCityOrVillage] = useState<ICityOrVillageType[]>();
  const getProvinces = useGetProvinces();
  const getCounty = useGetCounty();
  const getCityOrVillage = useGetCityOrVillage();
  useEffect(() => {
    getProvinces.mutate(undefined, {
      onSuccess: (value) => {
        const mappedProvinces = value.data.result.map(
          (value: IProvinceType) => ({
            value: value.id,
            label: value.title,
          })
        );
        setProvinces(mappedProvinces);
        setLoading(false);
      },
      onError: (v) => {
        console.log(v);
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
  if (!provinces)
    return (
      <Spinner size="lg" style={{ margin: "100px auto", display: "block" }} />
    );
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SellerAddressValidation}
      >
        {({ errors, touched, values }: FormikProps<any>) => (
          <Form>
            <div className="row">
              <div className="col-md-6 pl-2">
                <BasicSelectOption
                  name="provinceId"
                  placeHolder="استان"
                  lableText="استان"
                  data={provinces}
                  panelStyle
                  onChange={(value) => onProvinceChange(value)}
                />
                <BasicSelectOption
                  name="countyId"
                  placeHolder="شهرستان"
                  lableText="شهرستان"
                  onChange={(value) => counties && onCountyChange(value)}
                  isDisabled={!counties}
                  data={counties ? counties : [{ value: 0, lable: "" }]}
                  panelStyle
                />
                <BasicSelectOption
                  name="cityOrVillageId"
                  placeHolder="شهر / روستا"
                  lableText="شهر / روستا"
                  isDisabled={!cityOrVillage}
                  data={
                    cityOrVillage ? cityOrVillage : [{ value: 0, lable: "" }]
                  }
                  panelStyle
                />
                <TextArea
                  name="address"
                  lableText="آدرس"
                  placeholder="آدرس"
                  value={values.address}
                />
                <TextInput
                  name="postalCode"
                  placeholder="کد پستی"
                  lableText="کد پستی"
                  value={values.postalCode}
                />
              </div>
              <div className={`col-md-6 pl-2 ${Style.MapHolder}`}>
                <MapDetails onClick={(lat, lng) => console.log(lat, lng)} />
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

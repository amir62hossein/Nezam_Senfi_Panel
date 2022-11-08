import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";
import {
  IJahadProvinceBasic,
  IJahadProvinceContact,
  IJahadProvinceLocation,
} from "./../../models/jahad-province.model";

const Url = process.env.REACT_APP_PUBLIC_PATH;
const SetJahadProvinceBasicData = async (
  obj: IJahadProvinceBasic
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(`${Url}/api/ProvinceJahad/SetProvinceJahad`, obj);
};
export const useSetJahadProvinceBasicData = () => {
  return useMutation(SetJahadProvinceBasicData);
};

const SetJahadProvinceContactData = async (
  obj: IJahadProvinceContact
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(
    `${Url}/api/ProvinceJahad/SetProvinceJahadContactInformation`,
    obj
  );
};
export const useSetJahadProvinceContactData = () => {
  return useMutation(SetJahadProvinceContactData);
};

const SetJahadProvinceLocationData = async (
  obj: IJahadProvinceLocation
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(
    `${Url}/api/ProvinceJahad/SetProvinceJahadLocationInformation`,
    obj
  );
};
export const useSetJahadProvinceLocationData = () => {
  return useMutation(SetJahadProvinceLocationData);
};

import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";
import {
  IJahadCountyBasic,
  IJahadCountyContact,
  IJahadCountyLocation,
} from "./../../models/jahad-county.model";

const Url = process.env.REACT_APP_PUBLIC_PATH;
const SetJahadCountyBasicData = async (
  obj: IJahadCountyBasic
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(`${Url}/api/CountyJahad/SetCountyJahad`, obj);
};
export const useSetJahadCountyBasicData = () => {
  return useMutation(SetJahadCountyBasicData);
};

const SetJahadCountyContactData = async (
  obj: IJahadCountyContact
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(
    `${Url}/api/CountyJahad/SetCountyJahadContactInformation`,
    obj
  );
};
export const useSetJahadCountyContactData = () => {
  return useMutation(SetJahadCountyContactData);
};

const SetJahadCountyLocationData = async (
  obj: IJahadCountyLocation
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(
    `${Url}/api/CountyJahad/SetCountyJahadLocationInformation`,
    obj
  );
};
export const useSetJahadCountyLocationData = () => {
  return useMutation(SetJahadCountyLocationData);
};

import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";
import {
  IJahadMainLocationBasic,
  IJahadMainLocationContact,
  IJahadMainLocationLocation,
} from "./../../models/jahad-mainLocation.model";

const Url = process.env.REACT_APP_PUBLIC_PATH;
const SetJahadMainLocationBasicData = async (
  obj: IJahadMainLocationBasic
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(
    `${Url}/api/MainLocationJahad/SetMainLocationJahad`,
    obj
  );
};
export const useSetJahadMainLocationBasicData = () => {
  return useMutation(SetJahadMainLocationBasicData);
};

const SetJahadMainLocationContactData = async (
  obj: IJahadMainLocationContact
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(
    `${Url}/api/MainLocationJahad/SetMainLocationJahadContactInformation`,
    obj
  );
};
export const useSetJahadMainLocationContactData = () => {
  return useMutation(SetJahadMainLocationContactData);
};

const SetJahadMainLocationLocationData = async (
  obj: IJahadMainLocationLocation
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(
    `${Url}/api/MainLocationJahad/SetMainLocationJahadLocationInformation`,
    obj
  );
};
export const useSetJahadMainLocationLocationData = () => {
  return useMutation(SetJahadMainLocationLocationData);
};

import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";
import { IUnionBasicData } from "./../../models/union.model";

const Url = process.env.REACT_APP_PUBLIC_PATH;

const SetUnionBasicData = async (
  // obj: IUnionBasicData
  obj: any
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(`${Url}/api/Union/SetUnionJahad`, obj);
};

const SetUnionContactData = async (
  // obj: IUnionBasicData
  obj: any
): Promise<AxiosResponse<IAxiosResult>> => {
  if (obj.id >= 0)
    return await Http.post(`${Url}/api/Union/SetUnionContactInformation`, obj);
  else
    return await Http.post(`${Url}/api/Union/SetUnionContactInformation`, obj);
};

const SetUnionAddressData = async (
  // obj: IUnionBasicData
  obj: any
): Promise<AxiosResponse<IAxiosResult>> => {
  if (obj.id >= 0)
    return await Http.post(`${Url}/api/Union/SetUnionLocationInformation`, obj);
  else
    return await Http.post(`${Url}/api/Union/SetUnionLocationInformation`, obj);
};
const SetUnionBankData = async (
  // obj: IUnionBasicData
  obj: any
): Promise<AxiosResponse<IAxiosResult>> => {
  if (obj.id >= 0)
    return await Http.post(`${Url}/api/Union/SetUnionBankInformation`, obj);
  else return await Http.post(`${Url}/api/Union/SetUnionBankInformation`, obj);
};

export const useSetUnionBasicData = () => {
  return useMutation(SetUnionBasicData);
};
export const useSetUnionContactData = () => {
  return useMutation(SetUnionContactData);
};
export const useSetUnionAddressData = () => {
  return useMutation(SetUnionAddressData);
};
export const useSetUnionBankData = () => {
  return useMutation(SetUnionBankData);
};

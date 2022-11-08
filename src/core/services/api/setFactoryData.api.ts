import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";
import {
  IFactoryBasicData,
  IFactoryContactData,
  IFactoryLocationData,
} from "./../../models/factory.model";
const Url = process.env.REACT_APP_PUBLIC_PATH;

const SetFactoryBasicData = async (
  // obj: IFactoryBasicData
  obj: any
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(`${Url}/api/Factory/SetFactory`, obj);
};

const SetFactoryContactData = async (
  // obj: IFactoryContactData
  obj: any
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(
    `${Url}/api/Factory/SetFactoryContactInformation`,
    obj
  );
};

const SetFactoryLocationData = async (
  obj: IFactoryLocationData
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(
    `${Url}/api/Factory/SetFactoryLocationInformation`,
    obj
  );
};

const SetFactoryBankData = async (
  obj: IFactoryLocationData
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(`${Url}/api/Factory/SetFactoryBankInformation`, obj);
};

export const useSetFactoryBasicData = () => {
  return useMutation(SetFactoryBasicData);
};
export const useSetFactoryContactData = () => {
  return useMutation(SetFactoryContactData);
};
export const useSetFactoryLocationData = () => {
  return useMutation(SetFactoryLocationData);
};
export const useSetFactoryBanksData = () => {
  return useMutation(SetFactoryBankData);
};

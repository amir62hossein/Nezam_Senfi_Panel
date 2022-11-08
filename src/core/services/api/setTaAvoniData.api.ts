import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";

import {
  ITaAvoniBasicData,
  ITaAvoniBankData,
  ITaAvoniContactData,
  ITaAvoniLocationData,
} from "./../../models/taAvoni-api.model";

const Url = process.env.REACT_APP_PUBLIC_PATH;
const SetTaAvoniContactData = async (
  obj: ITaAvoniContactData
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(
    `${Url}/api/Cooperative/SetCooperativeContactInformation`,
    obj
  );
};
export const useSetTaAvoniContactData = () => {
  return useMutation(SetTaAvoniContactData);
};

const SetTaAvoniLocationData = async (
  obj: ITaAvoniLocationData
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(
    `${Url}/api/Cooperative/SetCooperativeLocationInformation`,
    obj
  );
};
export const useSetTaAvoniLocationData = () => {
  return useMutation(SetTaAvoniLocationData);
};

const SetTaAvoniBasicData = async (
  obj: ITaAvoniBasicData
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(`${Url}/api/Cooperative/SetCooperative`, obj);
};
export const useSetTaAvoniBasicData = () => {
  return useMutation(SetTaAvoniBasicData);
};

const SetTaAvoniBankData = async (
  obj: ITaAvoniBankData
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(
    `${Url}/api/Cooperative/SetCooperativeBankInformation`,
    obj
  );
};
export const useSetTaAvoniBankData = () => {
  return useMutation(SetTaAvoniBankData);
};

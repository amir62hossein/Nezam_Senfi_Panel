import { useMutation } from "react-query";
import methods from "../interceptors/http.interceptor";
import { IAxiosResult } from "../../models/axios-result.model";
import { AxiosResponse } from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export interface IConfirmCode {
  cellphone: string;
  verificationCode: string;
}

const ConfirmCode = async (
  value: IConfirmCode
): Promise<AxiosResponse<IAxiosResult>> => {
  return await methods.post(MainUrl + "/api/Account/ConfirmUserPhone", value);
};

export const useConfirm = () => {
  return useMutation(ConfirmCode, {});
};

import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";

const Url = process.env.REACT_APP_PUBLIC_PATH;

const SetProfile = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
  console.log(data);
  return await Http.post(`${Url}/api/Account/CompleteProfileUserReal`, data);
};

// const GetProfile = async (
//   data: any
// ): Promise<AxiosResponse<IAxiosResult>> => {};

export const useSetProfile = () => {
  return useMutation(SetProfile);
};
// export const useGetProfile = () => {
//   return useMutation(GetProfile);
// };

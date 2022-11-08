import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";
const Url = process.env.REACT_APP_PUBLIC_PATH;
const GetUserProfile = async (): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.get(`${Url}/api/Account/UserInfoProfile`);
};
export const useGetUserProfile = () => {
  return useMutation(GetUserProfile);
};

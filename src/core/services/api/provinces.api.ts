import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";

const Url = process.env.REACT_APP_PUBLIC_PATH;
const GetProvinces = async (): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.get(`${Url}/api/Province/GetProvincesForDropDown`);
};
export const useGetProvinces = () => {
  return useMutation(GetProvinces);
};

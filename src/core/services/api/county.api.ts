import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";

const Url = process.env.REACT_APP_PUBLIC_PATH;
const GetCounty = async (
  provinceId: number
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.get(
    `${Url}/api/County/GetCountiesForDropDown?provinceId=${provinceId}`
  );
};
export const useGetCounty = () => {
  return useMutation(GetCounty);
};

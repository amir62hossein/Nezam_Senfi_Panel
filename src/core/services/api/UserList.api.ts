import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";

const Url = process.env.REACT_APP_PUBLIC_PATH;
const GetAllUser = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.get(`${Url}/api/UserManager/GetAllUsers?PageNumber=${data.PageNumber}&PageSize=${data.PageSize}`);
};
export const useGetAllUser = () => {
    return useMutation(GetAllUser);
};
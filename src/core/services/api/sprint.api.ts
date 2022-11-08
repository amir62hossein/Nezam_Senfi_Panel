import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";

const Url = process.env.REACT_APP_PUBLIC_PATH;

const CreateSprint = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.post(`${Url}/api/Sprint`, data);
};

const GetAllSprint = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.get(`${Url}/api/Sprint?PageNumber=${data.PageNumber}&PageSize=${data.PageNumber}`);
};
const GetAllStartUpDeskByMembers = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.get(`${Url}/api/StartUpDesk/GetAllStartUpDeskByMembers?PageNumber=${data.PageNumber}&PageSize=${data.PageNumber}`, data);
};

export const useCreateSprint = () => {
    return useMutation(CreateSprint);
};
  
export const useGetAllSprint = () => {
  return useMutation(GetAllSprint);
};
    
export const useGetAllStartUpDeskByMembers = () => {
  return useMutation(GetAllStartUpDeskByMembers);
};
  
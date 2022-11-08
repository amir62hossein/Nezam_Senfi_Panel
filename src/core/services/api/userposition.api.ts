import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";

const Url = process.env.REACT_APP_PUBLIC_PATH;

const CreatePosition = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.post(`${Url}/api/Position`, data);
};

const GetAllPosition = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.get(`${Url}/api/Position?PageNumber=${data.PageNumber}&PageSize=${data.PageSize}`);
};

const DeletePosition = async (id: number): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.delete(`${Url}/api/Position/${id}`);
};

const UpdatePosition = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.put(`${Url}/api/Position/${data.id}`, data);
};
export const useCreatePosition = () => {
    return useMutation(CreatePosition);
};
  
export const useGetAllPosition = () => {
    return useMutation(GetAllPosition);
};
    
export const useDeletePosition  = () => {
    return useMutation(DeletePosition);
};
    
export const useUpdatePosition  = () => {
    return useMutation(UpdatePosition);
};

  

import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";

const Url = process.env.REACT_APP_PUBLIC_PATH;

const CreateCategory = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.post(`${Url}/api/Category/CreateCategory`, data);
};

const GetAllCategory = async (
  data: any
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.get(
    `${Url}/api/Category/GetAllCategory?PageNumber=${data.PageNumber}&PageSize=${data.PageSize}`
  );
};
const DeleteCategory = async (id: number): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.delete(`${Url}/api/Category/DeleteCategory/${id}`);
};

const UpdateCategory = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.put(`${Url}/api/Category/UpdateCategory/${data.id}`, data);
};


export const useCreateCategory = () => {
  return useMutation(CreateCategory);
};
  
export const useGetAllCategory = () => {
  return useMutation(GetAllCategory);
};  
export const useDeleteCategory = () => {
  return useMutation(DeleteCategory);
}; 
export const useUpdateCategory = () => {
  return useMutation(UpdateCategory);
};
import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";

const Url = process.env.REACT_APP_PUBLIC_PATH;

const CreateSkill = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.post(`${Url}/api/Skill`, data);
};

const GetAllSkill = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.get(
      `${Url}/api/Skill?PageNumber=${data.PageNumber}&PageSize=${data.PageSize}`
    );
};
const DeleteSkill = async (id: number): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.delete(`${Url}/api/Skill/${id}`);
  };
const UpdateSkill = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.put(`${Url}/api/Skill/${data.id}`, data);
};


export const useCreateSkill = () => {
    return useMutation(CreateSkill);
};
  
export const useGetAllSkill = () => {
    return useMutation(GetAllSkill);
}  
export const useDeleteSkill= () => {
    return useMutation(DeleteSkill);
}; 
export const useUpdateSkill= () => {
    return useMutation(UpdateSkill);
};
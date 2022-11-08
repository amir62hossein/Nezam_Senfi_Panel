import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";

const Url = process.env.REACT_APP_PUBLIC_PATH;

const CreateJobRecords = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.post(`${Url}/api/JobRecords/CreateJobe`, data);
};

const GetUserJobRecords = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.get(`${Url}/api/JobRecords/GetUserJobRecords`);
};

const DeleteJobRecords = async (id: number): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.delete(`${Url}/api/JobRecords/${id}`);
};

const UpdateJobRecords = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.put(`${Url}/api/JobRecords/${data.id}`, data);
}; 

export const useUpdateJobRecords = () => {
    return useMutation(UpdateJobRecords);
};

export const useCreateJobRecords = () => {
    return useMutation(CreateJobRecords);
};
  
export const useDeleteJobRecords = () => {
    return useMutation(DeleteJobRecords);
};

export const useGetUserJobRecords = () => {
    return useMutation(GetUserJobRecords);
};
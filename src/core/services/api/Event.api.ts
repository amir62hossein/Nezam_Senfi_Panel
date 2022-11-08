import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";

const Url = process.env.REACT_APP_PUBLIC_PATH;

const CreateEvent = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.post(`${Url}/api/Event/CreateEvent`, data);
};

const UpdateEvent = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.put(`${Url}/api/Event/UpdateEvent/${data.id}`, data);
};

const GetAllEvent = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.get(`${Url}/api/Event/GetAllEvent?PageNumber=${data.PageNumber}&PageSize=${data.PageSize}`);
};

const DeleteEvent = async (id: number): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.delete(`${Url}/api/Event/DeleteEvent/${id}`);
};

export const useCreateEvent = () => {
    return useMutation(CreateEvent);
};

export const useUpdateEvent = () => {
    return useMutation(UpdateEvent);
};

export const useDeleteEvent = () => {
    return useMutation(DeleteEvent);
};

export const useGetAllEvent = () => {
    return useMutation(GetAllEvent);
};
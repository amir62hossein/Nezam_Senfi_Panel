import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";

const Url = process.env.REACT_APP_PUBLIC_PATH;

const GetAllStartupDesks = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.get(
    `${Url}/api/StartupDesk/GetAllStartupDesks?PageNumber=${data.PageNumber}&PageSize=${data.PageSize}`
  );
};

const GetAllStartupDeskByMembers = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.get(`${Url}/api/StartupDesk/GetAllStartupDeskByMembers?PageNumber=${data.PageNumber}&PageSize=${data.PageSize}`);
};

const GetAllStartupDeskByMembereById = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.get(`${Url}/api/StartupDesk/GetStartupDeskDetailsByMembere/${data.startupId}`);
};

const AssignMemberToStartupDesk = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(`${Url}/api/StartupDesk/AssignMemberToStartupDesk/${data.startupDeskId}` , data.data);
};

export const useGetAllStartupDesks = () => {
    return useMutation(GetAllStartupDesks);
};

export const useGetAllStartupDeskByMembers = () => {
    return useMutation(GetAllStartupDeskByMembers);
};

export const useGetAllStartupDeskByMembereById = () => {
    return useMutation(GetAllStartupDeskByMembereById);
};

export const useAssignMemberToStartupDesk = () => {
    return useMutation(AssignMemberToStartupDesk);
};
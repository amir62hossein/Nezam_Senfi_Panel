import { useMutation } from "react-query";
import methods from "../interceptors/http.interceptor";
import { IAxiosResult } from "../../models/axios-result.model";
import axios, { AxiosResponse } from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const uninterceptedAxiosInstance = axios.create();

const GetUserInfoByNationalCode = async (
    userId: any
  ): Promise<AxiosResponse<IAxiosResult>> => {
    return await methods.get(
      `${MainUrl}/api/Account/GetUserInfoByNationalCode?nationalCode=${userId}`
    );
  };

const RegisterUserFromSSO = async (
  token: any
): Promise<AxiosResponse<IAxiosResult>> => {
  return await uninterceptedAxiosInstance.get(`${MainUrl}/api/Account/RegisterUserFromSSO`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const UserRolesClaims = async (
  token: any
): Promise<AxiosResponse<IAxiosResult>> => {
  return await uninterceptedAxiosInstance.get(
    `${MainUrl}/api/Account/UserRolesClaims`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};


const AddProvinceAdmin = async (
    data: any
  ): Promise<AxiosResponse<IAxiosResult>> => {
    return await methods.post(
      `${MainUrl}/api/Account/AddProvinceAdmin`, data
    );
  };
  

  export const useGetUserInfoByNationalCode = () => {
    return useMutation(GetUserInfoByNationalCode);
  };  
  
  export const useAddProvinceAdmin = () => {
    return useMutation(AddProvinceAdmin);
  };  
  export const useRegisterUserFromSSO = () => {
    return useMutation(RegisterUserFromSSO);
  };
  export const useUserRolesClaims = () => {
    return useMutation(UserRolesClaims);
  };
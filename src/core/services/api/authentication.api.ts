import { useMutation } from "react-query";
import methods from "../interceptors/http.interceptor";
import { IAxiosResult } from "../../models/axios-result.model";
import { AxiosResponse } from "axios";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export interface ILogin {
  emailOrUsername: string;
  password: string;
}

export interface IRegister {
  nationalCode: string;
  cellphone: string;
  // password: string;
}

interface ISelectOption {
  value: number;
  label: string;
}

export interface ICompleteProfile {
  username: string;
  name: string;
  lastName: string;
  fatherName: string | null;
  birthCertificatId: string | null;
  birthCertificatIssuedBy: string | null;
  birthDateAsShamsi: string | null;
  mobileNumber2: string | null;
  phoneNumber: string | null;
  phoneNumber2: string | null;
  faxNumber: string | null;
  faxNumber2: string | null;
  maritalStatus: ISelectOption | null;
  gender: ISelectOption | null;
  educationStatus: ISelectOption | null;
  dutySystemStatus: ISelectOption | null;
  password: string | null;
  email: string | null;
  // securityStamp: string | null;
  cityOrVillageId: ISelectOption | null;
}

const Login = async (value: ILogin): Promise<AxiosResponse<IAxiosResult>> => {
  return await methods.post(MainUrl + "/api/Authentication/Login", value);
};

const Register = async (
  value: IRegister
): Promise<AxiosResponse<IAxiosResult>> => {
  return await methods.post(MainUrl + "/api/Account/AddPotentialUser", value);
};

const RegisterUserReal = async (
  value: any
): Promise<AxiosResponse<IAxiosResult>> => {
  return await methods.post(MainUrl + "/api/Account/RegisterUserReal", value);
};

export const useLogin = () => {
  return useMutation(Login, {});
};

export const useRegister = () => {
  return useMutation(Register, {});
};

export const useRegisterUserReal = () => {
  return useMutation(RegisterUserReal, {});
};

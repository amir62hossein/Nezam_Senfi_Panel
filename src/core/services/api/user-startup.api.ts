import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";

const Url = process.env.REACT_APP_PUBLIC_PATH;


const GetStartupDesk = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.get(
      `${Url}/api/StartupDesk/GetAllStartupDeskByMembers?PageNumber=${data.PageNumber}&PageSize=${data.PageSize}`
    );
};
const GetAllStartupDesk = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.get(
      `${Url}/api/StartupDesk/GetAllStartupDesks?PageNumber=${data.PageNumber}&PageSize=${data.PageSize}`
    );
};

const UpdateSkill = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.put(`${Url}/api/Skill/${data.id}`, data);
};


export const useGetAllStartupDesk = () => {
    return useMutation(GetAllStartupDesk);
}  
  
export const useGetStartupDesk = () => {
    return useMutation(GetStartupDesk);
}  

// export const useUpdateSkill= () => {
//     return useMutation(UpdateSkill);
// };
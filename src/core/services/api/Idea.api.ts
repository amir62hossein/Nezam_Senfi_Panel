import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import Http from "../interceptors/http.interceptor";

const Url = process.env.REACT_APP_PUBLIC_PATH;

const CreateIdea = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.post(`${Url}/api/Idea/CreateIdea`, data);
};

const UpdateIdea = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.put(
    `${Url}/api/Idea/UpdateIdea/${data.ideaId}`,
    data.formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
};

const SelectIdeaByIdeaResponsibleCartable = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.post(`${Url}/api/Idea/SelectIdeaByIdeaResponsibleCartable/${data.ideaId}`);
};
// const SelectStartupDeskByStartupDeskResponsible= async (id: any): Promise<AxiosResponse<IAxiosResult>> => {
//     return await Http.post(`${Url}​/api​/StartupDesk​/SelectStartupDeskByStartupDeskResponsible​/${id}`);
  
// };
const SelectStartupDeskByStartupDeskResponsible=async(id:any):Promise<AxiosResponse<IAxiosResult>>=>{
  return await Http.post(`${Url}/api/StartupDesk/SelectStartupDeskByStartupDeskResponsible/${id}`)
}

const GetIdeaByApplicant = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.get(`${Url}/api/idea/GetIdeaByApplicant`);
};

const GetIdeaById = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.get(`${Url}/api/idea/GetIdeaById/${data.id}`);
}

const GetAllIdea = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.get(
    `${Url}/api/Idea/GetAllIdea?${data.PageNumber}&PageSize=${data.PageSize}`
  );
};

const GetAllCartables = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.get(
    `${Url}/api/startupDesk/startupResponsiblecartable?${data.PageNumber}&PageSize=${data.PageSize}`
  );
};
const AcceptIdeaByIdeaResponsible = async (
  data: any
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(
    `${Url}/api/Idea/AcceptIdeaByIdeaResponsible/${data.ideaId}`
  );
};

const RejectIdeaByIdeaResponsible = async (
  data: any
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(
    `${Url}/api/Idea/RejectIdeaByIdeaResponsible/${data.ideaId}`
  );
};
const AssignEventToIdea = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.post(
      `${Url}/api/Idea/AssignEventToIdea?ideaId=${data.ideaId}&eventId=${data.eventId}`
    );
};

export const useGetIdeaByApplicant = () => {
    return useMutation(GetIdeaByApplicant);
}

const GetAllIdeasByEventId = async (data: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.get(`${Url}/api/Idea/GetAllIdea?eventId=${data.eventId}`);
}
const GetEventById = async (id: any): Promise<AxiosResponse<IAxiosResult>> => {
    return await Http.get(`${Url}/api/Event/GetEventById/${id}`);
}

const IdeaResponsibleCartable = async (
  data: any
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.get(`${Url}/api/Idea/IdeaResponsibleCartable`);
};

export const useCreateIdea = () => {
  return useMutation(CreateIdea);
};
export const useGetIdeaById = () => {
    return useMutation(GetIdeaById);
};
export const useAssignEventToIdea = () => {
    return useMutation(AssignEventToIdea);
}

export const useGetAllIdea = () => {
    return useMutation(GetAllIdea);
};
export const useGetEventById = () => {
    return useMutation(GetEventById);
};
export const useGetAllIdeasByEventId = () => {
    return useMutation(GetAllIdeasByEventId);
};

export const useIdeaResponsibleCartable = () => {
  return useMutation(IdeaResponsibleCartable);
};
export const useGetAllCartables = () => {
  return useMutation(GetAllCartables);
};

export const useSelectIdeaByIdeaResponsibleCartable = () => {
    return useMutation(SelectIdeaByIdeaResponsibleCartable);
};
export const useSelectStartupDeskByStartupDeskResponsible=() => {
    return useMutation(SelectStartupDeskByStartupDeskResponsible);
};

export const useAcceptIdeaByIdeaResponsible = () => {
  return useMutation(AcceptIdeaByIdeaResponsible);
};
export const useRejectIdeaByIdeaResponsible = () => {
  return useMutation(RejectIdeaByIdeaResponsible);
};
export const useUpdateIdea = () => {
  return useMutation(UpdateIdea);
};
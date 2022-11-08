import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IAxiosResult } from "../../models/axios-result.model";
import { IImporterBasicData } from "../../models/importer.model";
import Http from "../interceptors/http.interceptor";
const Url = process.env.REACT_APP_PUBLIC_PATH;

const SetSaleAgentBasicData = async (
  obj: IImporterBasicData
): Promise<AxiosResponse<IAxiosResult>> => {
  return await Http.post(`${Url}/api/SalesAgent/SetSalesAgent`, obj);
};
export const useSetSaleAgentBasicData = () => {
  return useMutation(SetSaleAgentBasicData);
};

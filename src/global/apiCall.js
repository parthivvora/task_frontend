import axios from "axios";
import { BASE_URI, apiKeys } from "./apiKeys";

const httpRequest = axios.create({
  baseURL: BASE_URI,
});

export const insertUserData = (data) =>
  httpRequest.post(apiKeys.insertDataApi, data);
export const getUserData = () => httpRequest.get(apiKeys.getDataApi);

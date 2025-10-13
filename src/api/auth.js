
import api from "./apiConfig";

const AUTH_ENDPOINTS = {
  LOGIN: "/api/auth/login", // common endpoint
};

export const loginApi = async (payload) => {
  const { data } = await api.post(AUTH_ENDPOINTS.LOGIN, payload);
  return data; 
};

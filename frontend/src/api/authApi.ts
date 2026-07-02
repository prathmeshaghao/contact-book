import api from "./api";

export const loginUser = (data: { username: string; password: string }) =>
  api.post("/auth/login", data);

export const registerUser = (data: { username: string; password: string }) =>
  api.post("/auth/register", data);

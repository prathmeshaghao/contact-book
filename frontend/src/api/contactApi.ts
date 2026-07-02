import api from "./api";

export const getContacts = () => api.get("/contacts");

export const getContact = (id: number) => api.get(`/contacts/${id}`);

export const createContact = (data: any) => api.post("/contacts", data);

export const updateContact = (id: number, data: any) =>
  api.put(`/contacts/${id}`, data);

export const deleteContact = (id: number) => api.delete(`/contacts/${id}`);

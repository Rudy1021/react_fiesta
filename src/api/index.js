import { instance } from '@/api/axios';
export const signUp = (data) => {
  return instance.post(`/signUp`, data);
};

export const login = (data) => {
  return instance.post(`/login`, data);
};

import axios from 'axios';
import { CharmersDefaultType, CharmersExtendsType } from './types';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}`,
  headers: { 'Content-type': 'application/json' },
});

export const postCharmers = async (name: string): Promise<CharmersDefaultType> => {
  const { data } = await instance.post('/api/charmers', { name });
  return data;
};

export const getCharmers = async (id: string): Promise<CharmersExtendsType> => {
  const replace = id.substring(1);
  const { data } = await instance.get(`/api/charmers/${replace}`);
  return data;
};

export default instance;

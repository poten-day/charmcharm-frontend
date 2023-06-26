import axios from 'axios';
import { CharmersDefaultType } from './types';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}`,
});

export const postCharmers = async (name: string): Promise<CharmersDefaultType> => {
  const { data } = await instance.post('/api/charmers', name);
  return data;
};

export default instance;

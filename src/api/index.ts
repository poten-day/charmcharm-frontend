import axios from 'axios';
import { CharmersDefaultType, CharmersExtendsType, CharmersQuestionType } from './types';
import { AnswersFormType } from '@/store/useUserStore';

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

export const getQuestionForm = async (id: string | undefined): Promise<CharmersQuestionType> => {
  const { data } = await instance.get(`/api/questions/${id}`);
  return data;
};

export const postAnswersForm = async ({
  id,
  answers,
}: {
  id: string | undefined;
  answers: AnswersFormType[];
}) => {
  const { data } = await instance.post(`/api/answers/${id}`, answers);
  return data;
};

export default instance;

import axios from 'axios';
import {
  CharmerResultsType,
  CharmersDefaultType,
  CharmersExtendsType,
  CharmersQuestionType,
} from './types';
import { AnswersFormType } from '@/store/useUserStore';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}`,
  headers: { 'Content-type': 'application/json' },
});

export const postCharmers = async (name: string): Promise<CharmersDefaultType> => {
  const { data } = await instance.post('/api/charmers', { name });
  return data;
};

export const getCharmers = async (id: string | undefined): Promise<CharmersExtendsType> => {
  const { data } = await instance.get(`/api/charmers/${id}`);
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

export const getCharmersResult = async (id: string | undefined): Promise<CharmerResultsType> => {
  const { data } = await instance.get(`/api/charmers/${id}/results`);
  return data;
};

export default instance;

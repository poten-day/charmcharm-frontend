import { CharmersExtendsType } from '@/api/types';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type AnswersFormType = {
  answerIds: number[];
  questionId: number;
};

type StoreState = {
  user: CharmersExtendsType;
  answers: AnswersFormType[];
};

type StoreAction = {
  setUserInfo: (newState: CharmersExtendsType) => void;
  setAnswerData: (newState: AnswersFormType) => void;
  resetUserInfo: () => void;
  resetAnswerData: () => void;
};

const INIT_USER: CharmersExtendsType = {
  name: '',
  openTime: '',
  shareLink: '',
  finished: false,
};

const INIT_ANSWERS: AnswersFormType[] = [];

export type useUserStoreTypes = StoreState & StoreAction;

export const useUserStore = create<useUserStoreTypes>()(
  devtools((set) => ({
    user: INIT_USER,
    answers: INIT_ANSWERS,
    setUserInfo: (newState: CharmersExtendsType) => set({ user: newState }),
    setAnswerData: (newState: AnswersFormType) =>
      set((state) => ({ answers: [...state.answers, newState] })),
    resetUserInfo: () => set({ user: INIT_USER }),
    resetAnswerData: () => set({ answers: INIT_ANSWERS }),
  }))
);

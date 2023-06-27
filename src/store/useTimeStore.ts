import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type StoreState = {
  finishedTime: string;
  timer: number;
};

type StoreAction = {
  setFinishedTime: (newState: string) => void;
  setTimer: (newState: number) => void;
};

export type useTimeStoreTypes = StoreState & StoreAction;

export const useTimeStore = create<useTimeStoreTypes>()(
  devtools((set) => ({
    finishedTime: '',
    timer: 0,
    setFinishedTime: (newState: string) => set({ finishedTime: newState }),
    setTimer: (newState: number) => set({ timer: newState }),
  }))
);

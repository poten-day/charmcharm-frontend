import dayjs from 'dayjs';
import { useEffect } from 'react';
import { diffTime } from '@utils/date';
import { useTimeStore } from '@store/useTimeStore';

const useSetTime = () => {
  const { finishedTime, setFinishedTime, timer, setTimer } = useTimeStore();

  const setTimes = (targetTime: string) => {
    const diff = diffTime(targetTime, new Date());
    diff > 0 ? setTimer(diff) : setTimer(0);
  };

  const setFinishedTimeFunc = (targetTime: string) =>
    setFinishedTime(dayjs(targetTime).format('YYYY/MM/DD HH:mm'));

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1000);
      }
      if (timer <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return { finishedTime, timer, setTimer, setTimes, setFinishedTimeFunc };
};

export default useSetTime;

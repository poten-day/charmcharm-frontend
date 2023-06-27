import dayjs from 'dayjs';
import { diffTime } from '@/utils/date';
import { useEffect, useState } from 'react';

const useSetTime = () => {
  const [finishedTime, setFinishedTime] = useState('');
  const [timer, setTimer] = useState(0);

  const setTimes = (targetTime: string) => {
    const diff = diffTime(targetTime, new Date());
    diff > 0 ? setTimer(diff) : setTimer(0);
  };

  const setFinishedTimeFunc = (targetTime: string) =>
    setFinishedTime(dayjs(targetTime).format('YYYY/MM/DD HH:mm'));

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0) {
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

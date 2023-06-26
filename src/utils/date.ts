import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const diffTime = (targetTime: string) => {
  const openTime = dayjs(targetTime);
  const currentTime = dayjs(new Date());
  return openTime.diff(currentTime);
};

export const millisecondsToTime = (milliseconds: number) => {
  return dayjs.duration(milliseconds);
};

};

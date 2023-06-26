import dayjs from 'dayjs';

export const diffTime = (targetTime: number) => {
  const openTime = dayjs(targetTime);
  const now = dayjs(new Date());
  return openTime.diff(now);
};

import dayjs from 'dayjs';

export const diffTime = (targetTime: string) => {
  const openTime = dayjs(targetTime);
  const currentTime = dayjs(new Date());
  return openTime.diff(currentTime);
};
};

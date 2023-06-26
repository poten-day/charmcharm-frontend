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

export const updateTitleByTime = (targetTime: string) => {
  const createTimeAfter5Minute = dayjs(targetTime).subtract(4, 'hour').add(5, 'minute').format();
  const targetTimeLast5Minute = dayjs(targetTime).subtract(5, 'minute');
  const currentTime = dayjs(new Date());

  if (diffTime(createTimeAfter5Minute) > 0) {
    return '매력찾기 설문조사 시작-!';
  }

  if (targetTimeLast5Minute.diff(currentTime) < 0) {
    return '시간이 얼마 남지 않았어요';
  }

  return '아직 설문조사 진행중-!';
};

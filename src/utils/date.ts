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
  const createTime = dayjs(targetTime).subtract(4, 'hour').add(5, 'minute').format();
  const last5Minute = dayjs(targetTime).subtract(5, 'minute');
  const currentTime = dayjs(new Date());

  if (diffTime(createTime) > 0) {
    return '매력찾기 설문조사 시작-!';
  }

  if (last5Minute.diff(currentTime) < 0) {
    return '시간이 얼마 남지 않았어요';
  }

  return '아직 설문조사 진행중-!';
};

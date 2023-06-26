import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const diffTime = (target1: string | Date, target2: string | Date) => {
  const target1Time = dayjs(target1);
  const target2Time = dayjs(target2);
  return target1Time.diff(target2Time);
};

export const millisecondsToTime = (milliseconds: number) => {
  return dayjs.duration(milliseconds);
};

export const updateTitleByTime = (targetTime: string) => {
  const createTimeAfter5Minute = dayjs(targetTime).subtract(4, 'hour').add(5, 'minute').format();
  const targetTimeLast5Minute = dayjs(targetTime).subtract(5, 'minute').format();
  const currentTime = new Date();
  const diffEndTime = dayjs(targetTime).diff(currentTime);

  if (diffTime(createTimeAfter5Minute, new Date()) > 0) {
    return '매력찾기 설문조사 시작-!';
  }

  if (diffTime(targetTimeLast5Minute, currentTime) < 0 && diffEndTime > 0) {
    return '시간이 얼마 남지 않았어요';
  }

  if (diffTime(targetTime, currentTime) <= 0) {
    return '제한시간이 종료되었어요';
  }

  return '아직 설문조사 진행중-!';
};

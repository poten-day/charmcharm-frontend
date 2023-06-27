import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCharmers } from '@/api';
import { useNavigate } from 'react-router-dom';
import useSetTimes from '@/hooks/useSetTimes';
import { millisecondsToTime, updateTitleByTime } from '@/utils/date';

const CountdownArea = () => {
  const id = window.location.pathname;
  const navigate = useNavigate();
  const { data } = useQuery({ queryKey: ['user', id], queryFn: () => getCharmers(id) });
  const { finishedTime, setFinishedTimeFunc: setFinishedTime, setTimes, timer } = useSetTimes();

  useEffect(() => {
    if (data) {
      if (data.finished) {
        navigate(`${id}/result`);
        return;
      }
      setTimes(data.openTime);
      setFinishedTime(data.openTime);
    }
  }, [data]);

  useEffect(() => {
    if (!data) return;
    setTimes(data.openTime);
    if (timer === 0) {
      navigate(`${id}/result`);
      return;
    }
  }, [timer]);

  return (
    <div>
      <h1>{data ? updateTitleByTime(data.openTime) : ''}</h1>
      <p>
        설문조사는 <strong>단 4시간 동안</strong> 진행됩니다.
        <br /> 제한시간 내 친구들에게 링크를 공유해주세요!
      </p>
      <div className="flex items-center gap-2">
        <span>⏰</span>
        <p>{millisecondsToTime(timer).format('HH:mm:ss')}</p>
      </div>
      <div>
        <input type="text" defaultValue={`https://charmcharm.me${location.pathname}`} readOnly />
        <button type="button">공유</button>
      </div>
      <button type="button">설문 시작하기</button>
      <p>{finishedTime}에 결과가 오픈됩니다!</p>
    </div>
  );
};

export default CountdownArea;

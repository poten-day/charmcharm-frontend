import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCharmers } from '@/api';

const CountdownArea = () => {
  const id = window.location.pathname;
  const { data } = useQuery({ queryKey: ['user', id], queryFn: () => getCharmers(id) });

  const [finishedTime, setFinishedTime] = useState('');
  const [timer, setTimer] = useState('');

  useEffect(() => {
    if (data) {
      setTimer(data.openTime);
      setFinishedTime(data.openTime);
    }
  }, [data]);

  return (
    <div>
      <h1>상황에 따라 바뀌는 메인 텍스트</h1>
      <p>
        설문조사는 <strong>단 4시간 동안</strong> 진행됩니다.
        <br /> 제한시간 내 친구들에게 링크를 공유해주세요!
      </p>
      <div className="flex items-center gap-2">
        <span>아이콘</span>
        <p>남은 시간</p>
      </div>
      <div>
        <input type="text" defaultValue={`https://charmcharm.me${location.pathname}`} readOnly />
        <button type="button">공유</button>
      </div>
      <button type="button">설문 시작하기</button>
      <p>00:00에 결과가 오픈됩니다!</p>
    </div>
  );
};

export default CountdownArea;

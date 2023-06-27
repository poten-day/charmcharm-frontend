import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSetTimes from '@/hooks/useSetTimes';
import { diffTime, millisecondsToTime, updateTitleByTime } from '@/utils/date';
import ShareURL from '@components/Common/ShareURL';
import { CharmersExtendsType } from '@/api/types';

const Countdown = ({ data }: { data: CharmersExtendsType }) => {
  const id = window.location.pathname;
  const navigate = useNavigate();
  const { shareLink, openTime } = data;
  const { finishedTime, setFinishedTimeFunc: setFinishedTime, setTimes, timer } = useSetTimes();
  const onClickNavigateFormButton = () => navigate(`${id}/form`);

  useEffect(() => {
    setTimes(openTime);
    setFinishedTime(openTime);
  }, []);

  useEffect(() => {
    setTimes(openTime);
    if (diffTime(openTime, new Date()) <= 0 && timer === 0) {
      navigate(`${id}/result`);
      return;
    }
  }, [timer]);

  return (
    <div>
      <h1>{updateTitleByTime(openTime)}</h1>
      <p>
        설문조사는 <strong>단 4시간 동안</strong> 진행됩니다.
        <br /> 제한시간 내 친구들에게 링크를 공유해주세요!
      </p>
      <div className="flex items-center gap-2">
        <span>⏰</span>
        <p>{millisecondsToTime(timer).format('HH:mm:ss')}</p>
      </div>
      <ShareURL url={shareLink} />
      <button type="button" onClick={onClickNavigateFormButton}>
        설문 시작하기
      </button>
      <p>{finishedTime}에 결과가 오픈됩니다!</p>
    </div>
  );
};

export default Countdown;

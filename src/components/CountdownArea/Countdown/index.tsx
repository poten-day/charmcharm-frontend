import { useEffect } from 'react';
import { CharmersExtendsType } from '@api/types';
import useSetTimes from '@hooks/useSetTimes';
import useSetRouter from '@hooks/useSetRouter';
import { useUserStore } from '@store/useUserStore';
import { diffTime, updateTitleByTime } from '@utils/date';

import ShareURL from '@components/Common/ShareURL';
import Timer from '@components/Common/Timer';

const Countdown = ({ data }: { data: CharmersExtendsType }) => {
  const { routerHelper } = useSetRouter();
  const { shareLink, openTime } = data;
  const { finishedTime, setFinishedTimeFunc: setFinishedTime, setTimes, timer } = useSetTimes();
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const onClickNavigateFormButton = () => routerHelper.form();

  useEffect(() => {
    setTimes(openTime);
    setFinishedTime(openTime);
    setUserInfo(data);
  }, []);

  useEffect(() => {
    setTimes(openTime);
    if (diffTime(openTime, new Date()) <= 0 && timer === 0) {
      routerHelper.result();
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
      <Timer time={timer} />
      <ShareURL url={shareLink} />
      <button type="button" onClick={onClickNavigateFormButton}>
        설문 시작하기
      </button>
      <p>{finishedTime}에 결과가 오픈됩니다!</p>
    </div>
  );
};

export default Countdown;

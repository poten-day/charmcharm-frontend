import { useEffect } from 'react';
import { CharmersExtendsType } from '@api/types';
import useSetTimes from '@hooks/useSetTimes';
import useSetRouter from '@hooks/useSetRouter';
import { useUserStore } from '@store/useUserStore';
import { diffTime, updateTitleByTime } from '@utils/date';

import ShareURL from '@components/Common/ShareURL';
import Timer from '@components/Common/Timer';
import Button from '@/components/Common/Button';

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
    if (diffTime(openTime, new Date()) <= 0 && timer <= 0) {
      routerHelper.result();
      return;
    }
  }, [timer]);

  return (
    <div className="flex flex-col px-[20px] gap-[40px]">
      <div>
        <h1 className="text-center whitespace-pre-wrap text-h1 font-BRBA_B mt-[40px]">
          {updateTitleByTime(openTime)}
        </h1>
        <p className="text-baseReguler text-gray900 mt-[20px]">
          설문조사는 <strong className="text-gray900">단 1시간 동안</strong> 진행됩니다.
          <br /> 제한시간 내 친구들에게 링크를 공유해주세요!
        </p>
      </div>
      <div className="flex flex-col gap-[20px]">
        <Timer time={timer} />
        <ShareURL url={shareLink} />
      </div>
      <Button label="설문 시작하기" onClick={onClickNavigateFormButton} />
      <p className="text-baseReguler text-gray500">{finishedTime}에 결과가 오픈됩니다!</p>
    </div>
  );
};

export default Countdown;

import Timer from '@/components/Common/Timer';
import useSetTimes from '@/hooks/useSetTimes';
import { useUserStore } from '@/store/useUserStore';
import { useEffect } from 'react';

const QuestionsTimer = () => {
  const { setTimes, timer } = useSetTimes();
  const { user } = useUserStore();

  useEffect(() => {
    setTimes(user.openTime);
  }, [timer]);

  return <Timer time={timer} />;
};

export default QuestionsTimer;

import Timer from '@/components/Common/Timer';
import useSetTimes from '@/hooks/useSetTimes';
import { useUserStore } from '@/store/useUserStore';
import { useEffect } from 'react';

const QuestionsTimer = ({ setTimeOver }: { setTimeOver: () => void }) => {
  const { setTimes, timer } = useSetTimes();
  const { user } = useUserStore();

  useEffect(() => {
    setTimes(user.openTime);
    if (timer === 0) {
      setTimeOver();
    }
  }, [timer]);

  return <Timer time={timer} size="small" />;
};

export default QuestionsTimer;

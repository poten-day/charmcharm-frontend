import { useEffect } from 'react';
import useSetTimes from '@hooks/useSetTimes';
import Timer from '@components/Common/Timer';

const QuestionsTimer = ({ setTimeOver }: { setTimeOver: () => void }) => {
  const { timer } = useSetTimes();

  useEffect(() => {
    if (timer <= 0) {
      setTimeOver();
    }
  }, [timer]);

  return <Timer time={timer} size="small" />;
};

export default QuestionsTimer;

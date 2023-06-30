import { useEffect } from 'react';
import Timer from '@components/Common/Timer';
import useSetTimes from '@hooks/useSetTimes';

const QuestionsTimer = ({ setTimeOver }: { setTimeOver: () => void }) => {
  const { timer } = useSetTimes();

  useEffect(() => {
    if (timer === 0) {
      setTimeOver();
    }
  }, [timer]);

  return <Timer time={timer} size="small" />;
};

export default QuestionsTimer;

import { millisecondsToTime } from '@/utils/date';

const Timer = ({ time }: { time: number }) => {
  return (
    <div className="flex items-center gap-2">
      <span>⏰</span>
      <p>{millisecondsToTime(time).format('HH:mm:ss')}</p>
    </div>
  );
};

export default Timer;

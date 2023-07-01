import { millisecondsToTime } from '@utils/date';

type TimerProps = {
  time: number;
  size?: 'large' | 'small';
};

const styleConfig = {
  div: {
    common: 'max-w-[480px] flex items-center justify-between gap-2',
    small: 'bg-gray200 py-[16px] px-[20px]',
    large: 'border-1-gray200 rounded-[6px] p-[16px]',
  },
  icon: {
    small:
      "text-[16px] text-baseSemibold after:content-['마감까지_남은_시간'] text-gray500 after:ml-[12px]",
    large: 'text-[40px]',
  },
  text: {
    common: 'font-NeoDunggeunmoPro text-system',
    small: 'text-smTimer',
    large: 'text-lgTimer',
  },
};

const Timer = ({ time, size = 'large' }: TimerProps) => {
  return (
    <div
      className={`
      ${styleConfig.div.common} 
      ${size === 'small' ? styleConfig.div.small : styleConfig.div.large}
      `}
    >
      <span className={size === 'large' ? styleConfig.icon.large : styleConfig.icon.small}>⏰</span>
      <p
        className={`
        ${styleConfig.text.common} 
        ${size === 'small' ? styleConfig.text.small : styleConfig.text.large}
        `}
      >
        {millisecondsToTime(time).format('HH:mm:ss')}
      </p>
    </div>
  );
};

export default Timer;

import { memo } from 'react';

export interface ButtonProps {
  label: string;
  color?: 'white' | 'black';
  size?: 'small' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

const styleConfig = {
  common: 'py-[16px] border-1-gray900 radius-6 text-lgSemibold',
  white: 'bg-white text-gray900',
  black: 'bg-gray900 text-white',
  disabled: 'disabled:bg-gray200 disabled:border-gray200 disabled:text-gray500',
};

const Button = ({ color = 'black', size = 'large', ...props }: ButtonProps) => {
  const { label, disabled, onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
      ${styleConfig.common}
      ${styleConfig.disabled}
      ${color === 'white' ? styleConfig.white : styleConfig.black}
      ${size === 'large' ? 'w-full max-w-[480px]' : 'w-1/2 max-w-[240px]'}
      `}
    >
      {label}
    </button>
  );
};

export default memo(Button);

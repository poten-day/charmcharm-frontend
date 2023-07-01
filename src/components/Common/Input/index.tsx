interface InputProps {
  id?: string;
  maxLength: number;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { id, maxLength, placeholder, onChange } = props;

  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={onChange}
      className="p-[16px] radius-6 border-1-gray200 text-center w-full max-w-[480px] text-lgMedium focus:border-primary500"
    />
  );
};

export default Input;

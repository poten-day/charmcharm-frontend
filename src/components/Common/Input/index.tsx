interface InputProps {
  maxLength: number;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { maxLength, placeholder, onChange } = props;

  return (
    <input
      id="typingName"
      type="text"
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={onChange}
      className="p-[16px] border rounded-[6px] border-gray200 text-center w-full max-w-[480px] text-lgMedium"
    />
  );
};

export default Input;

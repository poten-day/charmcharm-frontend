import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postCharmers } from '@/api';
import Button from '@components/Common/Button';
import Input from '@components/Common/Input';

const MAX_LENGTH = 5;

const StartForm = () => {
  const navigate = useNavigate();
  const { data, isSuccess, mutate } = useMutation(postCharmers);
  const [name, setName] = useState('');

  const onClickButton = () => mutate(name);

  const inputTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setName(e.target.value);
  };

  const isDisabled = name === '';

  useEffect(() => {
    if (data && isSuccess) {
      const url = new URL(data.shareLink);
      navigate(url.pathname);
    }
  }, [data, isSuccess]);

  return (
    <form
      className="flex flex-col px-[20px] py-[40px] text-center gap-[20px]"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="typingName">
        <p className="text-lgSemibold">친구들과 함께하는 ⏰ 타임어택 설문조사</p>
      </label>
      <Input
        id="typingName"
        maxLength={MAX_LENGTH}
        onChange={inputTyping}
        placeholder="이름을 입력해주세요"
      />
      <Button disabled={isDisabled} label="시작하기" onClick={onClickButton} />
    </form>
  );
};

export default StartForm;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postCharmers } from '@/api';

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
    <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="typingName">
        <p>내 친구들은 나를 어떻게 생각할까?</p>
      </label>
      <input
        id="typingName"
        type="text"
        placeholder="이름을 입력해주세요"
        maxLength={MAX_LENGTH}
        onChange={inputTyping}
      />
      <button type="button" disabled={isDisabled} onClick={onClickButton}>
        시작하기
      </button>
    </form>
  );
};

export default StartForm;

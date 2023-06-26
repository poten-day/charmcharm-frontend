import { useState } from 'react';

const MAX_LENGTH = 5;

const RootPage = () => {
  const [inputValue, setInputValue] = useState('');

  const inputTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setInputValue(e.target.value);
  };

  const isDisabled = inputValue === '';

  return (
    <div>
      <div>로고</div>
      <div>이미지</div>
      <form className="flex flex-col">
        <label htmlFor="typingName">
          <p>내 친구들은 나를 어떻게 생각할까?</p>
        </label>
        <input
          id="typingName"
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={inputTyping}
        />
        <button type="button" disabled={isDisabled}>
          시작하기
        </button>
      </form>
    </div>
  );
};

export default RootPage;

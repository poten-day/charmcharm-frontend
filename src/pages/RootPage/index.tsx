const RootPage = () => {
  return (
    <div>
      <div>로고</div>
      <div>이미지</div>
      <form className="flex flex-col">
        <label htmlFor="typingName">
          <p>내 친구들은 나를 어떻게 생각할까?</p>
        </label>
        <input id="typingName" type="text" placeholder="이름을 입력해주세요" />
        <button type="button">시작하기</button>
      </form>
    </div>
  );
};

export default RootPage;

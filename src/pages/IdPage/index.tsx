import { useLocation } from 'react-router-dom';

const IdPage = () => {
  const location = useLocation();

  return (
    <div className="text-center">
      <header>나의 매력을 알려줘</header>
      <div className="flex items-center gap-2 ">
        <span>아이콘</span>
        <p className="text-left">
          링크를 잃어버리면 결과를 확인할 수 없어요. <br />
          메모장에 꼭 저장해두세요!
        </p>
      </div>
      <div>
        <h1>상황에 따라 바뀌는 메인 텍스트</h1>
        <p>
          설문조사는 <strong>단 4시간 동안</strong> 진행됩니다.
          <br /> 제한시간 내 친구들에게 링크를 공유해주세요!
        </p>
        <div className="flex items-center gap-2">
          <span>아이콘</span>
          <p>남은 시간</p>
        </div>
        <div>
          <input type="text" defaultValue={`https://charmcharm.me${location.pathname}`} readOnly />
          <button type="button">공유</button>
        </div>
        <button type="button">설문 시작하기</button>
        <p>00:00에 결과가 오픈됩니다!</p>
      </div>
    </div>
  );
};

export default IdPage;

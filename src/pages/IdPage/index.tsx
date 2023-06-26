import CountdownArea from '@/components/CountdownArea';

const IdPage = () => {
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
      <CountdownArea />
    </div>
  );
};

export default IdPage;

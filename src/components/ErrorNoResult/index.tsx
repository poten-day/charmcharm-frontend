import Timer from '@/components/Common/Timer';
import useSetRouter from '@/hooks/useSetRouter';

const ErrorNoResult = () => {
  const { routerHelper } = useSetRouter();
  const onClickNavigateMain = () => routerHelper.main();

  return (
    <div>
      <header>헤더</header>
      <p>ㅠ.ㅠ</p>
      <p>
        제한 시간이 <br /> 종료되었어요.
      </p>
      <p>아직 답변이 기록되지 않았어요.</p>
      <Timer time={0} />
      <button type="button" onClick={onClickNavigateMain}>
        새로운 시작하기
      </button>
    </div>
  );
};

export default ErrorNoResult;

import useSetRouter from '@hooks/useSetRouter';
import Header from '@components/Common/Header';
import Timer from '@components/Common/Timer';
import Button from '@components/Common/Button';

const ErrorNoResult = () => {
  const { routerHelper } = useSetRouter();
  const onClickNavigateMain = () => routerHelper.main();

  return (
    <>
      <Header />
      <div className="text-center flex flex-col gap-[40px] py-[40px] px-[20px] bg-white">
        <div>
          <p className="text-h1 font-BRBA_B text-gray900 mb-[20px]">
            <b className="text-primary500">ㅠ.ㅠ</b> <br /> 제한 시간이 <br /> 종료되었어요.
          </p>
          <p className="text-baseReguler text-gray900">아직 답변이 기록되지 않았어요.</p>
        </div>
        <Timer time={0} />
        <Button label="새로운 시작하기" onClick={onClickNavigateMain} />
      </div>
    </>
  );
};

export default ErrorNoResult;

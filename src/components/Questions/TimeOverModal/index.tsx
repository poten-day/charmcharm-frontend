import Button from '@/components/Common/Button';
import useSetRouter from '@/hooks/useSetRouter';
import { useUserStore } from '@/store/useUserStore';

const TimeOverModal = () => {
  const { user } = useUserStore();
  const { routerHelper } = useSetRouter();

  return (
    <div className="absolute w-[360px] bg-slate-300 mx-[20px] p-[20px] text-center rounded-[8px] border border-gray200">
      <p className="text-lgSemibold my-[8px]">앗 답변 시간이 종료되었어요.</p>
      <p className="text-baseReguler text-gray500">
        아쉽게도 완료하지 않은 답변은 <br />
        {user.name}에게 전달되지 않아요
      </p>
      <p className="text-lgSemibold my-[24px] text-[72px]">⏰</p>
      <Button label="결과 확인하기" onClick={() => routerHelper.result()} />
    </div>
  );
};

export default TimeOverModal;

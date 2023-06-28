import useSetRouter from '@/hooks/useSetRouter';
import { useUserStore } from '@/store/useUserStore';

const TimeOverModal = () => {
  const { user } = useUserStore();
  const { routerHelper } = useSetRouter();

  return (
    <div className="absolute bg-slate-300">
      <p>앗 답변 시간이 종료되었어요.</p>
      <p>
        아쉽게도 완료하지 않은 답변은 <br />
        {user.name}에게 전달되지 않아요
      </p>
      <button type="button" onClick={() => routerHelper.result()}>
        결과 확인하기
      </button>
    </div>
  );
};

export default TimeOverModal;

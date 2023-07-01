import Button from '@/components/Common/Button';
import useSetRouter from '@/hooks/useSetRouter';
import { useUserStore } from '@/store/useUserStore';
import { ReactComponent as CloseIcon } from '#/assets/images/icons/mingcute-close-line.svg';
import { Dispatch, SetStateAction, useRef } from 'react';

const TimeOverModal = ({ setTimeOver }: { setTimeOver: Dispatch<SetStateAction<boolean>> }) => {
  const { user } = useUserStore();
  const { routerHelper } = useSetRouter();

  const backgroundRef = useRef<HTMLDivElement>(null);

  const onClickOutsideCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backgroundRef.current) {
      setTimeOver(false);
    }
  };

  return (
    <div
      className="absolute w-full h-screen transform -translate-x-1/2 -translate-y-1/2 bg-opacity-25 bg-gray900 z-100 top-1/2 left-1/2"
      onClick={onClickOutsideCloseModal}
      ref={backgroundRef}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[320px] bg-slate-300 text-center rounded-[8px] border-1-gray200 bg-white z-999 p-[20px]">
        <button type="button" className="absolute right-[20px]" onClick={() => setTimeOver(false)}>
          <CloseIcon className="fill-gray500" />
        </button>
        <p className="text-lgSemibold mt-[32px] mb-[8px]">앗, 답변 시간이 종료되었어요.</p>
        <p className="text-baseReguler text-gray500">
          아쉽게도 완료하지 않은 답변은 <br />
          {user.name}에게 전달되지 않아요
        </p>
        <p className="my-[24px] text-[72px]">⏰</p>
        <Button label="결과 확인하기" onClick={() => routerHelper.result()} />
      </div>
    </div>
  );
};

export default TimeOverModal;

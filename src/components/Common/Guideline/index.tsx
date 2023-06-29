import { ReactComponent as Exclamation } from '#/assets/images/icons/exclamation-circle.svg';

const Guideline = () => {
  return (
    <div className="flex items-center gap-[12px] px-[20px] py-[16px] bg-gray200 text-gray500">
      <Exclamation className="w-[16px] h-[16px] fill-gray500" />
      <p className="text-left">
        링크를 잃어버리면 결과를 확인할 수 없어요. <br />
        메모장에 꼭 저장해두세요!
      </p>
    </div>
  );
};

export default Guideline;

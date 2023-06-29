import { ReactComponent as Vector } from '#/assets/images/vactor/header-vector.svg';

const Header = () => {
  return (
    <header className="flex items-baseline gap-[10px] max-w-[480px] justify-center bg-primary500 p-[17px] text-white text-h3 font-BRBA_B">
      <Vector />
      나의 매력을 알려줘!
      <Vector />
    </header>
  );
};

export default Header;

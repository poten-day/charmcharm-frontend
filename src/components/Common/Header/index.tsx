import { ReactComponent as Vector } from '#/assets/images/vactor/header-vector.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="max-w-[480px] bg-primary500 p-[17px] text-white text-h3 font-BRBA_B">
      <Link to={'/'} className="flex items-baseline justify-center gap-[10px]">
        <Vector />
        나의 매력을 알려줘!
        <Vector />
      </Link>
    </header>
  );
};

export default Header;

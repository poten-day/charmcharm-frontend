import ScrollToTop from '@/ScrollToTop';
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  return (
    <>
      <ScrollToTop />
      <div className="h-screen">
        <div className="max-w-[480px] bg-white h-screen m-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PageLayout;

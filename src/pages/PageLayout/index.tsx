import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '@/ScrollToTop';
import Loading from '@components/Common/Loading';

const PageLayout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ScrollToTop />
      <div className="h-screen">
        <div className="max-w-[480px] bg-white h-screen m-auto">
          <Outlet />
        </div>
      </div>
    </Suspense>
  );
};

export default PageLayout;

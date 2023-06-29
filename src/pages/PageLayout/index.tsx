import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  return (
    <div className="h-screen">
      <div className="max-w-[480px] bg-white h-screen m-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;

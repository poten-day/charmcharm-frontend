import { AxiosError } from 'axios';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import useSetRouter from '@hooks/useSetRouter';

const IdPageErrorFallback = ({ error }: { error: AxiosError<{ message: string }> }) => {
  const { routerHelper } = useSetRouter();
  useEffect(() => {
    if (error.response?.data.message === '존재하지 않는 charmer') {
      alert('존재하지 않는 유저입니다.');
      return routerHelper.main();
    }

    alert(error.response?.data.message);
  }, []);

  return <Navigate to="/" />;
};

export default IdPageErrorFallback;

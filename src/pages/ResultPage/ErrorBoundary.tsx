import { AxiosError } from 'axios';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import ErrorNoResult from '@components/ErrorNoResult';
import useSetRouter from '@hooks/useSetRouter';

const ResultPageErrorFallback = ({ error }: { error: AxiosError<{ message: string }> }) => {
  const { routerHelper } = useSetRouter();

  if (error.response?.data.message === '답변이 없습니다.') {
    return <ErrorNoResult />;
  }

  useEffect(() => {
    if (error.response?.data.message === '존재하지 않는 charmer') {
      alert('존재하지 않는 유저입니다.');
      return routerHelper.main();
    }
    if (error.response?.data.message === '아직 결과를 볼 수 없습니다.') {
      alert('아직 결과를 볼 수 없습니다.');
      return routerHelper.id();
    }

    alert(error.response?.data.message);
  }, []);

  return <Navigate to="/" />;
};

export default ResultPageErrorFallback;

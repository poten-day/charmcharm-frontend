import { AxiosError } from 'axios';
import { Navigate } from 'react-router-dom';

import ErrorNoResult from '@/components/ErrorNoResult';

const ResultPageErrorFallback = ({ error }: { error: AxiosError<{ message: string }> }) => {
  if (error.response?.data.message === '답변이 없습니다.') {
    return <ErrorNoResult />;
  }

  return <Navigate to="/" />;
};

export default ResultPageErrorFallback;

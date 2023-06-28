import { getCharmersResult } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import MainResult from '../MainResult';
import SubResult from '../SubResult';

const ResultContainer = () => {
  const params = useParams();
  const { data } = useQuery({
    queryKey: ['user-result', params.id],
    queryFn: () => getCharmersResult(params.id),
  });

  return (
    <div>
      <MainResult />
      <SubResult />
      <div>
        <button>저장하기</button>
        <button>공유하기</button>
      </div>
    </div>
  );
};

export default ResultContainer;

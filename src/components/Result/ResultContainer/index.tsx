import { getCharmersResult } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useShareURL from '@/hooks/useShareURL';
import MainResult from '../MainResult';
import SubResult from '../SubResult';

const ResultContainer = () => {
  const params = useParams();
  const { data } = useQuery({
    queryKey: ['user-result', params.id],
    queryFn: () => getCharmersResult(params.id),
  });
  const { executeShareURL } = useShareURL();

  return (
    <div>
      <MainResult />
      <SubResult />
      <div>
        <button>저장하기</button>
        <button onClick={() => executeShareURL(window.location.href)}>공유하기</button>
      </div>
    </div>
  );
};

export default ResultContainer;

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCharmers } from '@/api';
import useSetRouter from '@/hooks/useSetRouter';
import Countdown from './Countdown';
import Guideline from '@components/Common/Guideline';
import Header from '@components/Common/Header';

const CountdownArea = () => {
  const { id, routerHelper } = useSetRouter();
  const { data } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getCharmers(id),
    staleTime: 10000 * 6,
  });

  useEffect(() => {
    if (data && data.finished) {
      routerHelper.result();
      return;
    }
  }, [data]);

  return data && !data.finished ? (
    <div className="text-center bg-white">
      <Header />
      <Guideline />
      <Countdown data={data} />
    </div>
  ) : (
    <></>
  );
};

export default CountdownArea;

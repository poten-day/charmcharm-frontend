import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCharmers } from '@/api';
import { useNavigate } from 'react-router-dom';
import Countdown from './Countdown';

const CountdownArea = () => {
  const id = location.pathname;
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getCharmers(id),
    staleTime: 10000 * 6,
  });

  useEffect(() => {
    if (data && data.finished) {
      navigate(`${id}/result`);
      return;
    }
  }, [data]);

  return data && !data.finished ? (
    <div className="text-center">
      <header>나의 매력을 알려줘</header>
      <div className="flex items-center gap-2 ">
        <span>아이콘</span>
        <p className="text-left">
          링크를 잃어버리면 결과를 확인할 수 없어요. <br />
          메모장에 꼭 저장해두세요!
        </p>
      </div>
      <Countdown data={data} />
    </div>
  ) : (
    <></>
  );
};

export default CountdownArea;

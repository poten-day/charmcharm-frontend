import { getCharmersResult } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useShareURL from '@/hooks/useShareURL';

import Button from '@components/Common/Button';
import Header from '@components/Common/Header';
import MainResult from '@components/Result/MainResult';
import SubResult from '@components/Result/SubResult';

const ResultContainer = () => {
  const params = useParams();
  const { data } = useQuery({
    queryKey: ['user-result', params.id],
    queryFn: () => getCharmersResult(params.id),
  });
  const { executeShareURL } = useShareURL();

  return data ? (
    <div className="bg-white">
      <Header />
      <MainResult data={data} />
      <SubResult data={data.subQuestions} />
      <div className="flex w-full gap-[12px] px-[20px] py-[12px] bg-white">
        <Button label="저장하기" color="white" />
        <Button label="공유하기" onClick={() => executeShareURL(window.location.href)} />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ResultContainer;

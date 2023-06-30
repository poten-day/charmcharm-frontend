import { getCharmersResult } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useShareURL from '@/hooks/useShareURL';

import html2canvas from 'html2canvas';
import saveAs from 'file-saver';

import Button from '@components/Common/Button';
import Header from '@components/Common/Header';
import MainResult from '@components/Result/MainResult';
import SubResult from '@components/Result/SubResult';
import { useRef } from 'react';

const ResultContainer = () => {
  const params = useParams();
  const { data } = useQuery({
    queryKey: ['user-result', params.id],
    queryFn: () => getCharmersResult(params.id),
    useErrorBoundary: true,
  });
  const { executeShareURL } = useShareURL();

  const mainResultRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!mainResultRef.current) return;

    if (navigator.userAgent.toLowerCase().indexOf('kakaotalk') >= 0) {
      alert('카카오톡 인앱에서는 작동이 안될 수 있습니다.\r\n모바일 브라우저를 이용해주세요.');
    }

    try {
      const mainResult = mainResultRef.current;
      const canvas = await html2canvas(mainResult);
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, '참참_친구들이+말하는+나의+매력은?.png');
        }
      });
    } catch (error) {
      alert('변환 과정에서 오류가 생겼어요!');
    }
  };

  return data ? (
    <div className="bg-gray500 h-fit">
      <Header />
      <MainResult data={data} ref={mainResultRef} />
      <SubResult data={data.subQuestions} />
      <div className="flex w-full gap-[12px] px-[20px] py-[12px] bg-white fixed bottom-0 max-w-[480px]">
        <Button label="저장하기" color="white" onClick={handleDownload} />
        <Button label="공유하기" onClick={() => executeShareURL(window.location.href)} />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ResultContainer;

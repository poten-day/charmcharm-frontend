import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useSetTimes from '@/hooks/useSetTimes';
import { useUserStore } from '@/store/useUserStore';

import ShareURL from '@components/Common/ShareURL';
import Header from '@components/Common/Header';
import Guideline from '@components/Common/Guideline';
import Button from '@components/Common/Button';

const FormSuccessPage = () => {
  const navigate = useNavigate();
  const param = useParams();
  const { user, resetAnswerData, resetUserInfo } = useUserStore();
  const { finishedTime } = useSetTimes();

  const resetUserStore = () => {
    resetAnswerData();
    resetUserInfo();
  };

  const onClickNavigateMain = () => {
    resetUserStore();
    navigate('/');
  };

  useEffect(() => {
    if (user.name === '') {
      return navigate(`/${param.id}`);
    }

    const preventGoBack = () => {
      resetUserStore();
      navigate(`/${param.id}`);
    };

    (() => {
      history.pushState(null, '', location.href);
      window.addEventListener('popstate', preventGoBack);
    })();

    return () => {
      window.removeEventListener('popstate', preventGoBack);
    };
  }, []);

  return (
    <>
      <Header />
      <Guideline />
      <div className="text-center px-[20px]">
        <div className="my-[40px]">
          <p className="text-[40px]">💌</p>
          <p className="text-h1 font-BRBA_B my-[20px]">
            {user.name}에게 <br />
            소중한 답변이 <br />
            전달되었어요.
          </p>
          <p className="text-baseReguler text-gray500">{finishedTime}에 결과가 오픈됩니다!</p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <ShareURL url={user.shareLink} />
          <Button
            color="black"
            label="내 매력도 알아보기"
            onClick={onClickNavigateMain}
            size="large"
          />
        </div>
      </div>
    </>
  );
};

export default FormSuccessPage;

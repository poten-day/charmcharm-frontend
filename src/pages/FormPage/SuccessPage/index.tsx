import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useSetTimes from '@/hooks/useSetTimes';
import { useUserStore } from '@/store/useUserStore';
import ShareURL from '@/components/Common/ShareURL';

const FormSuccessPage = () => {
  const navigate = useNavigate();
  const param = useParams();
  const { user, resetAnswerData, resetUserInfo } = useUserStore();
  const { finishedTime } = useSetTimes();

  const resetUserStore = () => {
    resetAnswerData();
    resetUserInfo();
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
    <div>
      <header>나의 매력을 알려줘</header>
      <p>링크저장하세요</p>
      <p>{user.name}에게 소중한 답변이 전달되었어요.</p>
      <p>{finishedTime}에 결과가 오픈됩니다!</p>
      <ShareURL url={user.shareLink} />
      <button type="button">내 매력도 알아보기</button>
    </div>
  );
};

export default FormSuccessPage;

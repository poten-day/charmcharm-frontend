import { useEffect } from 'react';
import { useUserStore } from '@/store/useUserStore';
import useSetRouter from '@/hooks/useSetRouter';
import QuestionsContainer from '@components/Questions/QuestionsContainer';

const FormPage = () => {
  const { routerHelper } = useSetRouter();
  const { user } = useUserStore();

  useEffect(() => {
    if (user.name === '') {
      routerHelper.id();
    }
  }, []);

  return <QuestionsContainer />;
};

export default FormPage;

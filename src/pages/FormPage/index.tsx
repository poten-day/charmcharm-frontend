import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUserStore } from '@/store/useUserStore';
import QuestionsContainer from '@components/Questions/QuestionsContainer';

const FormPage = () => {
  const navigate = useNavigate();
  const param = useParams();
  const { user } = useUserStore();

  useEffect(() => {
    if (user.name === '') {
      navigate(`/${param.id}`);
    }
  }, []);

  return <QuestionsContainer />;
};

export default FormPage;

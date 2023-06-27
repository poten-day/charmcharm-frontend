import { getQuestionForm } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const QuestionsContainer = () => {
  const param = useParams();
  const { data } = useQuery({
    queryKey: ['form', param.id],
    queryFn: () => getQuestionForm(param.id),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>Questions</div>;
};

export default QuestionsContainer;

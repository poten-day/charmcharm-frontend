import { getQuestionForm } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import QuestionsTimer from '@components/Questions/QuestionTimer';
import QuestionFormList from '@components/Questions/QuestionFormList';

const QuestionsContainer = () => {
  const param = useParams();
  const { data } = useQuery({
    queryKey: ['form', param.id],
    queryFn: () => getQuestionForm(param.id),
  });

  return (
    <div>
      <QuestionsTimer />
      {data && <QuestionFormList data={data.questionForms} />}
    </div>
  );
};

export default QuestionsContainer;

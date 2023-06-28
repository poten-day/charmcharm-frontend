import { useState } from 'react';
import { getQuestionForm } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import QuestionsTimer from '@components/Questions/QuestionTimer';
import QuestionFormList from '@components/Questions/QuestionFormList';
import TimeOverModal from '@components/Questions/TimeOverModal';

const QuestionsContainer = () => {
  const param = useParams();
  const { data } = useQuery({
    queryKey: ['form', param.id],
    queryFn: () => getQuestionForm(param.id),
  });
  const [isTimeOver, setTimeOver] = useState(false);
  const setTimeOverFunc = () => setTimeOver(!isTimeOver);

  return (
    <div className="relative">
      <QuestionsTimer setTimeOver={setTimeOverFunc} />
      {data && (
        <QuestionFormList data={data.questionForms} formLength={data.questionForms.length} />
      )}
      {isTimeOver && <TimeOverModal />}
    </div>
  );
};

export default QuestionsContainer;

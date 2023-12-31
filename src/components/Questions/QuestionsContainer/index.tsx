import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { getQuestionForm } from '@api/index';

import QuestionsTimer from '@components/Questions/QuestionTimer';
import QuestionFormList from '@components/Questions/QuestionFormList';
import TimeOverModal from '@components/Questions/TimeOverModal';

const QuestionsContainer = () => {
  const param = useParams();
  const { data } = useQuery({
    queryKey: ['form', param.id],
    queryFn: () => getQuestionForm(param.id),
    staleTime: 10000 * 3,
  });
  const [isTimeOver, setTimeOver] = useState(false);
  const setTimeOverFunc = () => setTimeOver(!isTimeOver);

  return (
    <div className="bg-white">
      <QuestionsTimer setTimeOver={setTimeOverFunc} />
      {data && (
        <QuestionFormList data={data.questionForms} formLength={data.questionForms.length} />
      )}
      {isTimeOver && <TimeOverModal setTimeOver={setTimeOver} />}
    </div>
  );
};

export default QuestionsContainer;

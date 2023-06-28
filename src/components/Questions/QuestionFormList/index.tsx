import { useState } from 'react';
import { CharmersQuestionFormType } from '@/api/types';
import QuestionForm from '@components/Questions/QuestionForm';

const QuestionFormList = ({ data }: { data: CharmersQuestionFormType[] }) => {
  const [formIndex, setFormIndex] = useState(0);

  const onClickNextButton = () => {
    if (formIndex < data.length - 1) {
      return setFormIndex(formIndex + 1);
    }
  };

  return (
    <QuestionForm
      form={data[formIndex]}
      key={`Question-Form-${data[formIndex].id}`}
      onClickNextButton={onClickNextButton}
    />
  );
};
export default QuestionFormList;

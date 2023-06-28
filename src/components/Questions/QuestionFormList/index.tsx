import { useEffect, useState } from 'react';
import { CharmersQuestionFormType } from '@/api/types';
import QuestionForm from '@components/Questions/QuestionForm';
import { useMutation } from '@tanstack/react-query';
import { postAnswersForm } from '@/api';
import { useUserStore } from '@/store/useUserStore';
import { useNavigate, useParams } from 'react-router-dom';

const QuestionFormList = ({
  data,
  formLength,
}: {
  data: CharmersQuestionFormType[];
  formLength: number;
}) => {
  const param = useParams();
  const [formIndex, setFormIndex] = useState(0);
  const navigate = useNavigate();
  const { answers } = useUserStore();
  const { mutate } = useMutation(postAnswersForm, {
    onSuccess: () => {
      navigate(`/${param.id}/success`);
    },
  });

  const onClickNextButton = () => {
    if (formIndex < data.length - 1) {
      return setFormIndex(formIndex + 1);
    }
  };

  useEffect(() => {
    if (answers.length === formLength) {
      mutate({ id: param.id, answers });
    }
  }, [answers]);

  return (
    <QuestionForm
      form={data[formIndex]}
      key={`Question-Form-${data[formIndex].id}`}
      onClickNextButton={onClickNextButton}
    />
  );
};
export default QuestionFormList;

import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postAnswersForm } from '@/api';
import { CharmersQuestionFormType } from '@/api/types';
import useSetRouter from '@/hooks/useSetRouter';
import { useUserStore } from '@/store/useUserStore';

import QuestionForm from '@components/Questions/QuestionForm';

const QuestionFormList = ({
  data,
  formLength,
}: {
  data: CharmersQuestionFormType[];
  formLength: number;
}) => {
  const [formIndex, setFormIndex] = useState(0);
  const { id, routerHelper } = useSetRouter();
  const { answers } = useUserStore();
  const { mutate } = useMutation(postAnswersForm, {
    onSuccess: () => {
      routerHelper.success();
    },
  });

  const onClickNextButton = () => {
    if (formIndex < data.length - 1) {
      return setFormIndex(formIndex + 1);
    }
  };

  useEffect(() => {
    if (answers.length === formLength) {
      mutate({ id, answers });
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

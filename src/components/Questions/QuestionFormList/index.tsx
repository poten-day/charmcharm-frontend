import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postAnswersForm } from '@/api';
import { CharmersQuestionFormType } from '@/api/types';
import useSetRouter from '@/hooks/useSetRouter';
import { useUserStore } from '@/store/useUserStore';

import QuestionForm from '@components/Questions/QuestionForm';
import { AxiosError } from 'axios';

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
    onError: (res) => {
      const error = res as AxiosError<{ message: string }>;
      if (error.response?.data.message === '답변 가능한 시간이 지났습니다.') {
        alert(error.response?.data.message);
        return routerHelper.result();
      }

      if (error.response?.data.message === '존재하지 않는 charmer') {
        alert('존재하지 않는 유저입니다.');
        return routerHelper.main();
      }

      alert(error.response?.data.message);
      return routerHelper.main();
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

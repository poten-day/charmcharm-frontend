import { useEffect } from 'react';
import { CharmersQuestionFormType } from '@/api/types';
import { useUserStore } from '@store/useUserStore';
import useSetQuestionsForm from '@/hooks/useSetQuestionForm';
import CheckboxAnswers from './Answers/CheckboxAnswers';
import RadioAnswers from './Answers/RadioAnswers';

type QuestionFormType = {
  form: CharmersQuestionFormType;
  onClickNextButton: () => void;
};

const QuestionForm = ({ form, onClickNextButton }: QuestionFormType) => {
  const { id, questionTitle, answers, minAnswerCount, maxAnswerCount } = form;
  const { setAnswerData } = useUserStore();
  const { checkedInput, onChangeCheckboxInput, isDisabledCheckbox, isDisabledRadio } =
    useSetQuestionsForm(minAnswerCount, maxAnswerCount);

  const onClickButton = () => {
    onClickNextButton();
    setAnswerData({ answerIds: checkedInput.map(Number).sort((a, b) => a - b), questionId: id });
  };

  return (
    <div>
      <p>{questionTitle}</p>
      {minAnswerCount === 1 ? (
        <RadioAnswers answers={answers} />
      ) : (
        <CheckboxAnswers
          answers={answers}
          onChangeCheckboxInput={onChangeCheckboxInput}
          checkedInput={checkedInput}
        />
      )}
      <button
        type="button"
        onClick={onClickButton}
        disabled={minAnswerCount === 1 ? isDisabledRadio : isDisabledCheckbox}
      >
        다음
      </button>
    </div>
  );
};
export default QuestionForm;

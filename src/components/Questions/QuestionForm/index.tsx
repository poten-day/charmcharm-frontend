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
  const { setAnswerData, answers: storeAnswers } = useUserStore();
  const {
    checkedInput,
    onChangeCheckboxInput,
    onClickRadioInput,
    isDisabledCheckbox,
    isDisabledRadio,
  } = useSetQuestionsForm(minAnswerCount, maxAnswerCount);

  const onClickButton = () => {
    if (!storeAnswers.find((ans) => ans.questionId === id)) {
      setAnswerData({
        answerIds: checkedInput.map(Number).sort((a, b) => a - b),
        questionId: id,
      });
      onClickNextButton();
    }
  };

  return (
    <div>
      <p>{questionTitle}</p>
      {minAnswerCount === 1 ? (
        <RadioAnswers answers={answers} onClickRadioInput={onClickRadioInput} />
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

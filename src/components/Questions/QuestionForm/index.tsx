import { CharmersQuestionFormType } from '@/api/types';
import { useUserStore } from '@store/useUserStore';
import useSetQuestionsForm from '@/hooks/useSetQuestionForm';
import CheckboxAnswers from './Answers/CheckboxAnswers';
import RadioAnswers from './Answers/RadioAnswers';
import Button from '@components/Common/Button';

type QuestionFormType = {
  form: CharmersQuestionFormType;
  onClickNextButton: () => void;
};

const QuestionForm = ({ form, onClickNextButton }: QuestionFormType) => {
  const { id, questionTitle, answers, minAnswerCount, isSingleChoice } = form;
  const { setAnswerData, answers: storeAnswers } = useUserStore();
  const {
    checkedInput,
    onChangeCheckboxInput,
    onClickRadioInput,
    isDisabledCheckbox,
    isDisabledRadio,
  } = useSetQuestionsForm(minAnswerCount);

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
    <div className="px-[20px] text-center ">
      <p className="text-center text-h2 font-BRBA_B py-[24px]">{questionTitle}</p>
      {isSingleChoice ? (
        <RadioAnswers answers={answers} onClickRadioInput={onClickRadioInput} />
      ) : (
        <CheckboxAnswers
          answers={answers}
          onChangeCheckboxInput={onChangeCheckboxInput}
          checkedInput={checkedInput}
        />
      )}
      <div className="flex flex-col gap-[10px] py-[12px]">
        {!isSingleChoice && (
          <p className="text-baseReguler text-gray500">최소 3개 이상 선택해 주세요.</p>
        )}
        <Button
          color="black"
          label="다음"
          onClick={onClickButton}
          size="large"
          disabled={isSingleChoice ? isDisabledRadio : isDisabledCheckbox}
        />
      </div>
    </div>
  );
};
export default QuestionForm;

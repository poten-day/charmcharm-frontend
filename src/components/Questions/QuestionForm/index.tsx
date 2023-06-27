import { CharmersQuestionFormType } from '@/api/types';

type QuestionFormType = {
  form: CharmersQuestionFormType;
  onClickNextButton: () => void;
};

const QuestionForm = ({ form, onClickNextButton }: QuestionFormType) => {
  const { id, questionTitle, answers, minAnswerCount, maxAnswerCount } = form;

  return (
    <div>
      <p>{questionTitle}</p>
      <button type="button" onClick={onClickNextButton}>
        다음
      </button>
    </div>
  );
};
export default QuestionForm;

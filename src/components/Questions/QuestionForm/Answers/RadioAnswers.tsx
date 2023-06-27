import { CharmersQuestionAnswersType } from '@/api/types';

type RadioAnswersType = {
  answers: CharmersQuestionAnswersType[];
  onClickRadioInput: (e: React.MouseEvent<HTMLInputElement>) => void;
};

const RadioAnswers = ({ answers, onClickRadioInput }: RadioAnswersType) => {
  return (
    <ul>
      {answers.map((answer) => (
        <li key={answer.id}>
          <input
            type="radio"
            name="radio-answers"
            id={String(answer.id)}
            onClick={onClickRadioInput}
          />
          <label htmlFor={String(answer.id)}>{answer.description}</label>
        </li>
      ))}
    </ul>
  );
};
export default RadioAnswers;

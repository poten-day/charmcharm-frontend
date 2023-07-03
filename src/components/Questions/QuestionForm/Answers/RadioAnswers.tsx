import { CharmersQuestionAnswersType } from '@api/types';
import { TagStyleConfig } from '@utils/styleConfig';

type RadioAnswersType = {
  answers: CharmersQuestionAnswersType[];
  onClickRadioInput: (e: React.MouseEvent<HTMLInputElement>) => void;
};

const RadioAnswers = ({ answers, onClickRadioInput }: RadioAnswersType) => {
  return (
    <ul className="flex flex-col gap-[12px] pb-[120px]">
      {answers.map((answer) => (
        <li key={`radio-list-${answer.description}`} className="w-full">
          <input
            type="radio"
            name="radio-answers"
            id={String(answer.id)}
            onClick={onClickRadioInput}
            className="hidden peer"
          />
          <label
            htmlFor={String(answer.id)}
            className={`${TagStyleConfig.common} ${TagStyleConfig.checked} ${TagStyleConfig.radio}`}
          >
            {answer.description}
          </label>
        </li>
      ))}
    </ul>
  );
};
export default RadioAnswers;

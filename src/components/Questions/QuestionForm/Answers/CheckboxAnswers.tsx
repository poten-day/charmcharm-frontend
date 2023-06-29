import { CharmersQuestionAnswersType } from '@/api/types';
import { TagStyleConfig } from '@/utils/styleConfig';

type CheckboxAnswersType = {
  answers: CharmersQuestionAnswersType[];
  checkedInput: string[];
  onChangeCheckboxInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxAnswers = ({ answers, onChangeCheckboxInput, checkedInput }: CheckboxAnswersType) => {
  const findCheckedInput = (id: string) => !!checkedInput.find((input) => input === id);

  return (
    <ul className="flex flex-wrap justify-center gap-[8px] px-[20px] pb-[120px]">
      {answers.map((answer) => (
        <li key={answer.id} className="w-fit h-fit">
          <input
            type="checkbox"
            name={`checkbox-answers`}
            id={String(answer.id)}
            onChange={onChangeCheckboxInput}
            checked={findCheckedInput(String(answer.id))}
            className="hidden peer"
          />
          <label
            htmlFor={String(answer.id)}
            className={`${TagStyleConfig.common} ${TagStyleConfig.checked} ${TagStyleConfig.checkbox}`}
          >
            <span>{answer.description}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
export default CheckboxAnswers;

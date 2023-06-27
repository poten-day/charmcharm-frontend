import { CharmersQuestionAnswersType } from '@/api/types';

type CheckboxAnswersType = {
  answers: CharmersQuestionAnswersType[];
  checkedInput: string[];
  onChangeCheckboxInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxAnswers = ({ answers, onChangeCheckboxInput, checkedInput }: CheckboxAnswersType) => {
  const findCheckedInput = (id: string) => !!checkedInput.find((input) => input === id);

  return (
    <ul className="flex flex-wrap">
      {answers.map((answer) => (
        <li key={answer.id} className="w-[30%]">
          <input
            type="checkbox"
            name={`checkbox-answers`}
            id={String(answer.id)}
            onChange={onChangeCheckboxInput}
            checked={findCheckedInput(String(answer.id))}
          />
          <label htmlFor={String(answer.id)}>{answer.description}</label>
        </li>
      ))}
    </ul>
  );
};
export default CheckboxAnswers;

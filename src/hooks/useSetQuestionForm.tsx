import { useState } from 'react';

const useSetQuestionsForm = (minAnswerCount: number) => {
  const [checkedInput, setCheckedInput] = useState<string[]>([]);

  const onChangeCheckboxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      return setCheckedInput((prevCheckedInput) =>
        prevCheckedInput.filter((checkedId) => checkedId !== e.target.id)
      );
    }
    return setCheckedInput([...checkedInput, e.target.id]);
  };

  const onClickRadioInput = (e: React.MouseEvent<HTMLInputElement>) => {
    if (e.target instanceof HTMLInputElement) {
      if (e.target.id === checkedInput[0]) {
        e.target.checked = false;
        return setCheckedInput([]);
      }
      setCheckedInput([e.target.id]);
    }
  };

  const isDisabledCheckbox = checkedInput.length < minAnswerCount;
  const isDisabledRadio = !checkedInput.length;

  return {
    checkedInput,
    onChangeCheckboxInput,
    onClickRadioInput,
    isDisabledCheckbox,
    isDisabledRadio,
  };
};

export default useSetQuestionsForm;

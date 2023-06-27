import { useState } from 'react';

const useSetQuestionsForm = (minAnswerCount: number, maxAnswerCount: number) => {
  const [checkedInput, setCheckedInput] = useState<string[]>([]);

  const onChangeCheckboxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      return setCheckedInput((prevCheckedInput) =>
        prevCheckedInput.filter((checkedId) => checkedId !== e.target.id)
      );
    }
    return setCheckedInput([...checkedInput, e.target.id]);
  };

  const onChangeCheckboxLimitMaxCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checkedInput.length < maxAnswerCount) {
      if (!e.target.checked) {
        return setCheckedInput((prevCheckedInput) =>
          prevCheckedInput.filter((checkedId) => checkedId !== e.target.id)
        );
      }
      return setCheckedInput([...checkedInput, e.target.id]);
    }

    if (!e.target.checked) {
      return setCheckedInput((prevCheckedInput) =>
        prevCheckedInput.filter((checkedId) => checkedId !== e.target.id)
      );
    }
  };

  const isDisabledCheckbox = checkedInput.length < minAnswerCount;
  const isDisabledRadio = !checkedInput.length;

  return {
    checkedInput,
    onChangeCheckboxInput,
    onChangeCheckboxLimitMaxCount,
    isDisabledCheckbox,
    isDisabledRadio,
  };
};

export default useSetQuestionsForm;

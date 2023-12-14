import { useState } from "react";
export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleInput(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }
  function handleInputBlur(id) {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInput,
    handleInputBlur,
    hasError: didEdit && !valueIsValid
  };
}

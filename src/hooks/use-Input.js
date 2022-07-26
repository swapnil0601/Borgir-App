import { useState } from "react";

const useInput = (check) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueValidity = check(enteredValue);
  const inputInvalidity = !valueValidity && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    valueValid: valueValidity,
    hasError: inputInvalidity,
    changeHandler: inputChangeHandler,
    blurHandler: inputBlurHandler,
    reset: reset,
  };
};

export default useInput;

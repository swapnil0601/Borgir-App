import React from "react";
import classes from "./Form.module.css";
import useInput from "../../hooks/use-Input";
const Form = () => {
  const {
    value: firstNameValue,
    valueValid: firstNameisValid,
    hasError: firstNameHasError,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lastNameValue,
    valueValid: lastNameisValid,
    hasError: lastNameHasError,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: emailValue,
    valueValid: emailisValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (firstNameisValid && lastNameisValid && emailisValid) formIsValid = true;

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) console.table(firstNameValue, lastNameValue, emailValue);
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameClasses = firstNameHasError
    ? `${classes.invalid} ${classes.input} `
    : classes.input;
  const lastNameClasses = lastNameHasError
    ? `${classes.invalid} ${classes.input}`
    : classes.input;
  const emailClasses = emailHasError
    ? `${classes.invalid} ${classes.input}`
    : classes.input;

  return (
    <div className={classes.formContainer}>
      <h1>Hello</h1>
      <h2>Want to Contact Us?</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          className={firstNameClasses}
          value={firstNameValue}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          type="text"
          placeholder="First Name..."
        />
        {firstNameHasError && <p className={classes.error}>Invalid Input</p>}
        <input
          className={lastNameClasses}
          value={lastNameValue}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          type="text"
          placeholder="Last Name..."
        />
        {lastNameHasError && <p className={classes.error}>Invalid Input</p>}
        <input
          className={emailClasses}
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="text"
          placeholder="Email..."
        />
        {emailHasError && <p className={classes.error}>Invalid Input</p>}
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

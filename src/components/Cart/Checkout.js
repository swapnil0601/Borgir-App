import React from "react";
import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-Input";
const Checkout = (props) => {
  const {
    value: nameValue,
    valueValid: nameisValid,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: streetValue,
    valueValid: streetisValid,
    hasError: streetHasError,
    changeHandler: streetChangeHandler,
    blurHandler: streetBlurHandler,
    reset: streetReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: postalValue,
    valueValid: postalisValid,
    hasError: postalHasError,
    changeHandler: postalChangeHandler,
    blurHandler: postalBlurHandler,
    reset: postalReset,
  } = useInput((value) => value.length === 6);

  let formIsValid = false;

  if (nameisValid && streetisValid && postalisValid) formIsValid = true;

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      props.onConfirm({
        name: nameValue,
        street: streetValue,
        postalCode: postalValue,
      });
    }

    nameReset();
    streetReset();
    postalReset();
  };

  const nameClasses = nameHasError
    ? `${classes.invalid} ${classes.input} `
    : classes.input;
  const streetClasses = streetHasError
    ? `${classes.invalid} ${classes.input}`
    : classes.input;
  const postalClasses = postalHasError
    ? `${classes.invalid} ${classes.input}`
    : classes.input;

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        className={nameClasses}
        value={nameValue}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        type="text"
        placeholder="Your Name..."
      />
      {nameHasError && <p className={classes.error}>Invalid Input</p>}
      <input
        className={streetClasses}
        value={streetValue}
        onChange={streetChangeHandler}
        onBlur={streetBlurHandler}
        type="text"
        placeholder="Street..."
      />
      {streetHasError && <p className={classes.error}>Invalid Input</p>}
      <input
        className={postalClasses}
        value={postalValue}
        onChange={postalChangeHandler}
        onBlur={postalBlurHandler}
        type="text"
        placeholder="Postal Code..."
      />
      {postalHasError && <p className={classes.error}>Invalid Input</p>}
      <div className={classes.actions}>
        <button className={classes.order} onClick={props.onBack}>
          Back
        </button>
        <button onClick={props.onClose} className={classes.cancel}>
          Cancel
        </button>
        <button type="submit" className={classes.order}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;

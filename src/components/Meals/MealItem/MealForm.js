import React, { useRef } from "react";
import classes from "./MealForm.module.css";
import Input from "../../UI/Input";
const MealForm = (props) => {
  const amountInput = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const val = amountInput.current.value;
    const numVal = +val;
    props.onAdd(numVal);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInput}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          type: "number",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.btn}>+ADD</button>
    </form>
  );
};

export default MealForm;

import React, { useContext } from "react";
import MealForm from "./MealForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const editprice = `$${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext);
  const addHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      price: props.price,
      name: props.name,
      amount: amount,
    });
  };
  console.log(props.imgPath);
  return (
    <div className={classes.meal}>
      <div className={classes["card-header"]}>
        <img src={props.imgPath} alt="borgir" />
      </div>
      <div className={classes["card-body"]}>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <div className={classes.price}>{editprice}</div>
        <div className={classes.formContainer}>
          <MealForm id={props.id} onAdd={addHandler} />
        </div>
      </div>
    </div>
  );
};
//<div className={classes.price}>{editprice}</div>
export default MealItem;

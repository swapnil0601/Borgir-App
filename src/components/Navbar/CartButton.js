import React, { useContext } from "react";
import classes from "./CartButton.module.css";
import CartContext from "../../store/cart-context";
import { FaShoppingCart as CartIcon } from "react-icons/fa";
const CartButton = (props) => {
  const ctx = useContext(CartContext);
  const totalItems = ctx.items.reduce((curr, item) => (curr += item.amount), 0);
  return (
    <button className={classes.cart} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;

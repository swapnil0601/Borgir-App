import React, { Fragment, useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmt = `$${Math.abs(ctx.totalAmount.toFixed(2))}`;
  const addHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  const removeHandler = (id) => {
    ctx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          amount={item.amount}
          name={item.name}
          onAdd={addHandler.bind(null, item)}
          onRemove={removeHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const [isCheckout, setIsCheckout] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (ctx.items.length === 0) setIsEmpty(true);
    else setIsEmpty(false);
  }, [ctx.items]);

  const orderHandler = (e) => {
    e.preventDefault();
    setIsCheckout(true);
  };
  const backHandler = (e) => {
    e.preventDefault();
    setIsCheckout(false);
  };

  const items = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>{totalAmt}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes.cancel}>
          Cancel
        </button>
        {!isEmpty && (
          <button className={classes.order} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </Fragment>
  );

  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const confirmHandler = (userData) => {
    setIsConfirming(true);
    setIsCheckout(false);
    // await fetch(
    //   "https://food-order-app-76968-default-rtdb.firebaseio.com/orders.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       user: userData,
    //       order: ctx.items,
    //       total: totalAmt,
    //     }),
    //   }
    // );
    setTimeout(() => {
      setIsConfirming(false);
      setIsConfirmed(true);
    }, 1000);
    ctx.reset();
  };

  const checkout = (
    <Fragment>
      <div className={classes.total}>
        <span>Total</span>
        <span>{totalAmt}</span>
      </div>
      <Checkout
        onConfirm={confirmHandler}
        onBack={backHandler}
        onClose={props.onClose}
      />
    </Fragment>
  );

  const confirming = (
    <Fragment>
      <div>
        <h2>Confirming</h2>
      </div>
    </Fragment>
  );
  const confirmed = (
    <Fragment>
      <div>
        <h2>Confirmed</h2>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes.cancel}>
          Cancel
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isCheckout && !isConfirming && !isConfirmed && items}
      {isCheckout && !isConfirming && !isConfirmed && checkout}
      {!isCheckout && isConfirming && !isConfirmed && confirming}
      {!isCheckout && !isConfirming && isConfirmed && confirmed}
    </Modal>
  );
};

export default Cart;

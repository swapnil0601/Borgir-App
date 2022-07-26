import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotal =
      state.totalAmount + action.item.price * action.item.amount;

    const index = state.items.findIndex((item) => item.id === action.item.id);
    const currItem = state.items[index];

    let updatedItems;
    if (currItem) {
      const updatedItem = {
        ...currItem,
        amount: currItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[index] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotal,
    };
  }
  if (action.type === "REMOVE") {
    const index = state.items.findIndex((item) => item.id === action.id);
    const currItem = state.items[index];
    const updatedTotal = state.totalAmount - currItem.price;
    let updatedItems;
    if (currItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...currItem, amount: currItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[index] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotal,
    };
  }
  if (action.type === "RESET") {
    return defaultCart;
  }

  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

  const addItemHandler = (item) => {
    dispatchCart({
      type: "ADD",
      item: item,
    });
  };
  const removeItemHandler = (id) => {
    dispatchCart({
      type: "REMOVE",
      id: id,
    });
  };
  const resetHandler = () => {
    dispatchCart({ type: "RESET" });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    reset: resetHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

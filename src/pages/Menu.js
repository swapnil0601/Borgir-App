import React from "react";
import MealList from "../components/Meals/MealList";
import classes from "./Menu.module.css";
const Menu = () => {
  return (
    <div className={classes.menu}>
      <MealList />
    </div>
  );
};

export default Menu;

import React, { Fragment } from "react";
import MealList from "./MealList";
import MealSummary from "./MealSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <MealList />
    </Fragment>
  );
};

export default Meals;

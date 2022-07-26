import React from "react";
// import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./MealList.module.css";
import Borgir50 from "../../assets/fiftyBorgir.jpg";
import BorgirBarbeque from "../../assets/BarbequeBorgir.jpg";
import BorgirCheese from "../../assets/CheeseBorgir.jpg";
import BorgirSlider from "../../assets/SliderBorgir.jpg";
const DUMMY_MEALS = [
  {
    id: 1,
    name: "50/50 Borgir",
    description: "Half ground bacon, half ground beef burger patty",
    imgPath: Borgir50,
    price: 5.99,
  },
  {
    id: 2,
    name: "Barbecue Borgir",
    description:
      "Prepared with ground beef, mixed with onions and barbecue sauce, and then grilled.",
    imgPath: BorgirBarbeque,
    price: 7.99,
  },
  {
    id: 3,
    name: "Cheese Borgir",
    description: "Hamburger accompanied with melted cheese",
    imgPath: BorgirCheese,
    price: 9.99,
  },
  {
    id: 4,
    name: "Slider Borgir",
    description: "Small hamburgers served on a slider roll",
    imgPath: BorgirSlider,
    price: 5.99,
  },
];

const MealList = () => {
  // const [burgers, setBurgers] = useState(DUMMY_MEALS);
  // const [isLoading, setIsLoading] = useState(true);
  // const [httpError, setHttpError] = useState(null);

  // useEffect(() => {
  // const getBurgers = async () => {
  //   const response = await fetch(
  //     "https://food-order-app-76968-default-rtdb.firebaseio.com/meal.json"
  //   );
  //   if (!response.ok) {
  //     throw new Error("Something Went Wrong");
  //   }
  //   const responseData = await response.json();

  //   const data = [];
  //   for (const key in responseData) {
  //     data.push({
  //       id: key,
  //       name: responseData[key].name,
  //       description: responseData[key].description,
  //       price: responseData[key].price,
  //     });
  //   }
  //   setBurgers(data);
  //   setIsLoading(false);
  // };

  //   getBurgers().catch((error) => {
  //     setIsLoading(false);
  //     setHttpError(error.message);
  //   });
  // }, []);

  // if (isLoading) {
  //   return (
  //     <Card className={classes.meals}>
  //       <h2 style={{ color: "black" }}>Loading ...</h2>
  //     </Card>
  //   );
  // }
  // if (httpError) {
  //   return (
  //     <Card className={classes.meals}>
  //       <h2 style={{ color: "black" }}>{httpError}...</h2>
  //     </Card>
  //   );
  // }

  const list = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      imgPath={meal.imgPath}
    />
  ));

  return <div className={classes.meals}>{list}</div>;
};

export default MealList;

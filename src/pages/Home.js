import React from "react";
import styles from "./Home.module.css";
import burgerImg from "../assets/floatingBurger.png";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <h1>Biggies Borgir</h1>
        <p>All sorrows are less with a Burger.</p>
        <p>So, We bring you the best classic burgers you will ever find!!</p>
        <div className={styles.btns}>
          <NavLink to="/menu">
            <button className={`${styles.btn} ${styles.order}`}>Order</button>
          </NavLink>
          <NavLink to="/contact-us">
            <button className={`${styles.btn} ${styles.contact}`}>
              Contact Us
            </button>
          </NavLink>
        </div>
      </div>
      <div
        className={styles["img-container"]}
        style={{ backgroundImage: `url(${burgerImg})` }}
      ></div>
    </div>
  );
};

export default Home;

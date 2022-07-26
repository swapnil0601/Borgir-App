import React from "react";
import { NavLink } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import styles from "./Navbar.module.css";
import CartButton from "./CartButton";
const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <NavLink className={styles.logo} to="/">
        <FaHamburger />
      </NavLink>
      <div className={styles.links}>
        <NavLink to="/" activestyle="true" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/menu" activestyle="true" className={styles.link}>
          Menu
        </NavLink>
        <NavLink to="/about" activestyle="true" className={styles.link}>
          About
        </NavLink>
        <NavLink to="/contact-us" activestyle="true" className={styles.link}>
          <button className={styles.btn}>Contact Us</button>
        </NavLink>
        <CartButton onShow={props.onShow} />
      </div>
    </div>
  );
};

export default Navbar;

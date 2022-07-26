import React from "react";
import classes from "./Contact.module.css";
import contactImg from "../assets/contactImg.jpg";
import Form from "../components/Form/Form";
const ContactUs = () => {
  return (
    <div className={classes.main}>
      <div
        className={classes.sideImg}
        style={{ backgroundImage: `url(${contactImg})` }}
      />
      <div className={classes.container}>
        <Form />
      </div>
    </div>
  );
};

export default ContactUs;

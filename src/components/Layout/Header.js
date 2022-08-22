import React from "react";

import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
import mainImage from "../../assets/main.jpeg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>SUBWAY</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainImage} alt="subway sandwiches" />
      </div>
    </React.Fragment>
  );
};

export default Header;

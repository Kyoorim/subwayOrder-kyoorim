import React from "react";

import classes from "./MenuItem.module.css";
import MenuItemForm from "./MenuItemForm";

const MenuItem = (props) => {
  const price = `${props.price} 원`;

  //   const addToCartHandler = (amount) => {
  //     cartCtx.addItem({
  //       id: props.id,
  //       name: props.name,
  //       price: props.price,
  //       calory: props.calory,
  //     });
  //   };
  return (
    <li className={classes.menu}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.calory} kcal</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MenuItemForm />
    </li>
  );
};

export default MenuItem;

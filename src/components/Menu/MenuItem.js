import React, { useContext } from "react";

import classes from "./MenuItem.module.css";
import MenuItemForm from "./MenuItemForm";
import CartContext from "../../store/cart-context";

const MenuItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `${props.price} 원`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.menu}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.calory} kcal</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MenuItemForm onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MenuItem;

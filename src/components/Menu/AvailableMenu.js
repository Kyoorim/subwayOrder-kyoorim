import React, { useState, useEffect } from "react";

import MenuItem from "./MenuItem";
import Card from "../UI/Card";

import classes from "./AvailableMenu.module.css";

const AvailableMenu = () => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fecthMenu = async () => {
      const response = await fetch(
        "https://udemy-react-http-77f19-default-rtdb.firebaseio.com/subway.json"
      );

      if (!response.ok) {
        throw new Error("자료를 불러오는데 문제가 있습니다..");
      }
      const responseData = await response.json();

      const loadedMenu = [];

      for (const key in responseData) {
        loadedMenu.push({
          id: key,
          name: responseData[key].name,
          calory: responseData[key].calory,
          price: responseData[key].price,
        });
      }

      setMenu(loadedMenu);
      setIsLoading(false);
    };

    fecthMenu().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>로딩 중...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  const menuList = menu.map((menu) => (
    <MenuItem
      key={menu.id}
      id={menu.id}
      name={menu.name}
      calory={menu.calory}
      price={menu.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{menuList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMenu;

import React from "react";

import AvailableMenu from "./AvailableMenu";
import MenuSummary from "./MenuSummary";

const Menu = () => {
  return (
    <React.Fragment>
      <MenuSummary />
      <AvailableMenu />
    </React.Fragment>
  );
};

export default Menu;

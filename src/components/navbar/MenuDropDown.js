import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import MenuModal from "./MenuModal";
import "../../App.css";

const MenuDropDown = () => {
  const { menues } = useContext(GlobalContext);
  return (
    <Fragment>
      {menues.length > 0 ? (
        <ul
          className={window.innerWidth < 768 ? "dropdown-iphone" : "dropdown"}
        >
          {menues.map((menu) => {
            return (
              <li key={menu.id}>
                <MenuModal title={menu.title} id={menu.id} />
              </li>
            );
          })}
        </ul>
      ) : null}
    </Fragment>
  );
};

export default MenuDropDown;

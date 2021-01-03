import React, { useContext, Fragment } from "react";
import "../../App.css";
import { GlobalContext } from "../../context/GlobalContext";

const Menu = ({ id }) => {
  const { menues } = useContext(GlobalContext);

  return (
    <Fragment>
      {menues.map((item, index) => {
        return id === item.id ? (
          <div className="containerMenu" key={item.id}>
            {item.bread ? (
              <div className="menuList">
                <h4>{item.bread}</h4>
              </div>
            ) : null}
            <div className="menuList">
              <h4>{item.dish}</h4>
              <p>{item.description}</p>
            </div>
            <div className="menuList">
              <h4>{item.dish2}</h4>
              <p>{item.description2}</p>
            </div>
            <div className="menuList">
              <h4>{item.dish3}</h4>
              <p>{item.description3}</p>
            </div>
            <div className="menuList">
              <h4>{item.dish4}</h4>
              <p>{item.description4}</p>
            </div>

            {item.dish5 && item.description5 ? (
              <div className="menuList">
                <h4>{item.dish5}</h4>
                <p>{item.description5}</p>
              </div>
            ) : null}

            {item.dish6 && item.description6 ? (
              <div className="menuList">
                <h4>{item.dish6}</h4>
                <p>{item.description6}</p>
              </div>
            ) : null}
            {item.dish7 && item.description7 ? (
              <div className="menuList">
                <h4>{item.dish7}</h4>
                <p>{item.description7}</p>
              </div>
            ) : null}
            {item.dish8 && item.description8 ? (
              <div className="menuList">
                <h4>{item.dish8}</h4>
                <p>{item.description8}</p>
              </div>
            ) : null}
            {item.dish9 && item.description9 ? (
              <div className="menuList">
                <h4>{item.dish9}</h4>
                <p>{item.description9}</p>
              </div>
            ) : null}
            <span className="price">{item.price}</span>
          </div>
        ) : null;
      })}
    </Fragment>
  );
};

export default Menu;

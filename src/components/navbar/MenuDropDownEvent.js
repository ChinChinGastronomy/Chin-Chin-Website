import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Typography from "@material-ui/core/Typography";

import "../../App.css";

const MenuDropDownEvent = () => {
  const { events } = useContext(GlobalContext);

  return (
    <Fragment>
      {events.length > 1 ? (
        <ul
          className={window.innerWidth < 768 ? "dropdown-iphone" : "dropdown"}
        >
          {events.map((event) => {
            return (
              <>
                {event.showInNavbar ? (
                  <li key={event.id} className="eventLink">
                    <a
                      href={event.pdf}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "gold",
                      }}
                    >
                      <Typography>{event.title}</Typography>
                    </a>
                  </li>
                ) : null}
              </>
            );
          })}
        </ul>
      ) : (
        <ul
          className={window.innerWidth < 768 ? "dropdown-iphone" : "dropdown"}
        >
          <li style={{ color: "gold", cursor: "auto" }}> No Events Menu</li>
        </ul>
      )}
    </Fragment>
  );
};

export default MenuDropDownEvent;

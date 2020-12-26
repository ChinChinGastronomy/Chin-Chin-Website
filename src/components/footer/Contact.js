import React from "react";
import { contacts } from "../../utils/utils";

const Contact = () => {
  return (
    <div className="outer-contact">
      <div className="cont-contact">
        <p>
          {contacts.iconAdd} {contacts.address}
        </p>
        <p>
          {contacts.iconPhone} {contacts.phone}
        </p>
        <a
          href={`mailto:${contacts.email}`}
          target="_blank"
          rel="noreferrer"
          className="email"
        >
          {contacts.iconEmail} {contacts.email}
        </a>
        <a
          href={contacts.direction}
          target="_blank"
          rel="noreferrer"
          className="direction"
        >
          Direction
        </a>
      </div>
      <div className="slogan">
        <h2>Come and See US</h2>
      </div>
    </div>
  );
};

export default Contact;

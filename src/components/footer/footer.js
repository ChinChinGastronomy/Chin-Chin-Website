import React from "react";
import Social from "../social/Social";
import "../../App.css";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="footer" id="ft">
      <Contact />

      <div>
        <Social />
      </div>
      <p>&#169; 2020 Chin Chin Gastronomy</p>
    </div>
  );
};

export default Footer;

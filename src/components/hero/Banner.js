import React from "react";
import "../../App.css";

import { links } from "../../utils/utils";

const Banner = ({ title, subtitle }) => {
  return (
    <div className="container">
      <div className="banner">
        <div className="title">
          <h1>{title}</h1>

          <p>{subtitle}</p>
        </div>
        <div className="callToAction">
          <a
            href={links.book}
            target="_blank"
            rel="noreferrer"
            className="btn-callAction"
          >
            Book Now
          </a>
          <a
            href={links.voucher}
            target="_blank"
            rel="noreferrer"
            className="btn-callAction"
          >
            Get voucher
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

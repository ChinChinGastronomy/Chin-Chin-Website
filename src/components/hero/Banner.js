import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import "../../App.css";

import { links } from "../../utils/utils";

const Banner = ({ title, subtitle }) => {
  let chinChin = useRef(null);
  let desc = useRef(null);
  let btn1 = useRef(null);
  let btn2 = useRef(null);

  useEffect(() => {
    TweenMax.to(chinChin, 5, {
      opacity: 1,
      ease: Power3.easeIn,
    });
    TweenMax.to(desc, 5, {
      opacity: 1,
      ease: Power3.easeIn,
    });
    TweenMax.to(btn1, 5, {
      opacity: 1,
      ease: Power3.easeIn,
    });
    TweenMax.to(btn2, 5, {
      opacity: 1,
      ease: Power3.easeIn,
    });
  }, []);

  return (
    <div className="container">
      <div className="banner">
        <div className="title">
          <h1
            ref={(el) => {
              chinChin = el;
            }}
          >
            {title}
          </h1>

          <p
            ref={(el) => {
              desc = el;
            }}
          >
            {subtitle}
          </p>
        </div>
        <div className="callToAction">
          <a
            ref={(el) => {
              btn1 = el;
            }}
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
            ref={(el) => {
              btn2 = el;
            }}
          >
            Get voucher
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

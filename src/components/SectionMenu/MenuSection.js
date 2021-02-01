import React, { useState, useRef, useEffect } from "react";

import "../../App.css";

const MenuSection = ({ title, desc, pdf, images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextAutoSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextAutoSlide, 4000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  return (
    <div className="ctnSectionMenu">
      <div
        className={
          title === "3 Course Menu" || window.innerWidth < 768
            ? "innerSectionMenu"
            : title === "5 Course Menu"
            ? "innerSectionReverse"
            : null
        }
      >
        <div className="sectionLeft">
          {images.map((item, index) => (
            <div
              className={index === current ? "slide active  " : "slide "}
              key={index}
            >
              {index === current && (
                <img key={index} src={item} alt="try" className="image" />
              )}
            </div>
          ))}
        </div>
        <div className="sectionRight">
          <h2>{title}</h2>
          <p>{desc}</p>
          <div className="border" />

          <a
            href={pdf}
            className="btnSectionMenu"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Download Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;

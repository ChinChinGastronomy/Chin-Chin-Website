import React from "react";
import "../../App.css";
import { social } from "../../utils/utils";

const Social = () => {
  return (
    <div className="social">
      {social &&
        social.map(({ link, icon, color }, index) => (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            key={index}
            className={`${color}`}
          >
            {icon}
          </a>
        ))}
    </div>
  );
};

export default Social;

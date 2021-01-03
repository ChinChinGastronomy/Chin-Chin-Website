import React from "react";
import chef from "../../assets/Chef.jpg";

const AboutRight = () => {
  return (
    <div className="container-about-right">
      <div className="ctn-image">
        <img src={chef} alt="The chef" className="chef" />
      </div>
    </div>
  );
};

export default AboutRight;

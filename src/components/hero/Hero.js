import React, { useEffect, useState } from "react";
import "../../App.css";

const Hero = ({ children }) => {
  return <header className="hero">{children}</header>;
};

export default Hero;

import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import logo from "../../assets/logo.jpg";
import "../../App.css";
import MenuDropDown from "./MenuDropDown";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSubMenu = () => {
    return setSubMenu(!subMenu);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setSubMenu(false);
    } else {
      setSubMenu(true);
    }
  };

  const onMouseleave = () => {
    if (window.innerWidth < 960) {
      setSubMenu(false);
    } else {
      setSubMenu(false);
    }
  };

  const onMouseleaveToggle = () => {
    if (window.innerWidth > 768) {
      setToggle(false);
    } else {
      setToggle(false);
    }
  };

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <button type="button" onClick={handleToggle} className="nav-btn">
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul
          className={toggle ? "nav-links show-nav " : "nav-links"}
          onMouseLeave={onMouseleaveToggle}
        >
          <li>
            <Link
              onClick={() => {
                return window.innerWidth > 768 ? null : setToggle(!toggle);
              }}
            >
              Home
            </Link>
          </li>
          <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseleave}>
            {window.innerWidth < 768 ? (
              <Fragment>
                <Link onClick={handleSubMenu}>
                  Menu <MdArrowDropDown className="arrow" />
                </Link>
                {subMenu && <MenuDropDown />}
              </Fragment>
            ) : window.innerWidth > 768 ? (
              <Fragment>
                <Link>
                  Menu <MdArrowDropDown className="arrow" />
                </Link>
                <MenuDropDown />
              </Fragment>
            ) : null}
          </li>
          <li>
            <Link
              onClick={() => {
                return window.innerWidth > 768 ? null : setToggle(!toggle);
              }}
            >
              About
            </Link>
          </li>
          <li>
            <a
              href="#ft"
              onClick={() => {
                return window.innerWidth > 768 ? null : setToggle(!toggle);
              }}
            >
              Contact US
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

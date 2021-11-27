import React, { useState, Fragment} from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import logo from "../../assets/logo.jpg";

import "../../App.css";
import MenuDropDown from "./MenuDropDown";
import MenuDropDownEvent from "./MenuDropDownEvent";


export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [subMenuEvent, setSubMenuEvent] = useState(false);
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

  const handleSubMenuEvent = () => {
    return setSubMenuEvent(!subMenuEvent);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setSubMenu(false);
      setSubMenuEvent(false);
    } else {
      setSubMenu(true);
      setSubMenuEvent(true);
    }
  };

  const onMouseleave = () => {
    if (window.innerWidth < 960) {
      setSubMenu(false);
      setSubMenuEvent(false);
    } else {
      setSubMenu(false);
      setSubMenuEvent(false);
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
            <img
              src={logo}
              alt="logo"
              className="logo"
              
            />
          </Link>
          <button
            type="button"
            onClick={handleToggle}
            className="nav-btn"
           
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul
          className={toggle ? "nav-links show-nav " : "nav-links"}
          onMouseLeave={onMouseleaveToggle}
        >
          <li
            
           
          >
            <a
              href="#home"
              onClick={() => {
                return window.innerWidth > 768 ? null : setToggle(!toggle);
              }}
            >
              Home
            </a>
          </li>

          <li
            
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseleave}
           
          >
            {window.innerWidth < 768 ? (
              <Fragment>
                <Link onClick={handleSubMenu}>
                  Menu
                  <MdArrowDropDown className="arrow" />
                </Link>
                {subMenu && <MenuDropDown />}
              </Fragment>
            ) : window.innerWidth > 768 ? (
              <Fragment>
                <Link>
                  Menu
                  <MdArrowDropDown className="arrow" />
                </Link>
                <MenuDropDown />
              </Fragment>
            ) : null}
          </li>
          {/** Events Menu in Navbar */}
          <li
            
          
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseleave}
          >
            {window.innerWidth < 768 ? (
              <Fragment>
                <Link onClick={handleSubMenuEvent}>
                  Events
                  <MdArrowDropDown className="arrow" />
                </Link>
                {subMenuEvent && <MenuDropDownEvent />}
              </Fragment>
            ) : window.innerWidth > 768 ? (
              <Fragment>
                <Link>
                  Event
                  <MdArrowDropDown className="arrow" />
                </Link>
                <MenuDropDownEvent />
              </Fragment>
            ) : null}
          </li>

          {/******************************** */}
          <li
           
           
          >
            <a
              href="#About"
              onClick={() => {
                return window.innerWidth > 768 ? null : setToggle(!toggle);
              }}
            >
              The Chef
            </a>
          </li>
          <li
            
            
          >
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

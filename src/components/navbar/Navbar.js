import React, { useState, Fragment, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import logo from "../../assets/logo.jpg";

import "../../App.css";
import MenuDropDown from "./MenuDropDown";
import MenuDropDownEvent from "./MenuDropDownEvent";
import { TweenMax, Power3 } from "gsap";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [subMenuEvent, setSubMenuEvent] = useState(false);
  const [navbar, setNavbar] = useState(false);

  let logoAnimation = useRef(null);
  let list1 = useRef(null);
  let list2 = useRef(null);
  let list3 = useRef(null);
  let list4 = useRef(null);
  let event1 = useRef(null);
  let burgerMenu = useRef(null);

  useEffect(() => {
    TweenMax.to(logoAnimation, 2, {
      opacity: 1,
      ease: Power3.easeIn,
    });
    TweenMax.to(list1, 2.2, {
      opacity: 1,
      ease: Power3.easeIn,
    });
    TweenMax.to(list2, 3, {
      opacity: 1,
      ease: Power3.easeIn,
    });
    TweenMax.to(list3, 4, {
      opacity: 1,
      ease: Power3.easeIn,
    });
    TweenMax.to(list4, 5, {
      opacity: 1.6,
      ease: Power3.easeIn,
    });
    TweenMax.to(burgerMenu, 2.3, {
      opacity: 1.6,
      ease: Power3.easeIn,
    });
    TweenMax.to(event1, 2.3, {
      opacity: 1.6,
      ease: Power3.easeIn,
    });
  }, []);

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
              ref={(el) => {
                logoAnimation = el;
              }}
            />
          </Link>
          <button
            type="button"
            onClick={handleToggle}
            className="nav-btn"
            ref={(el) => {
              burgerMenu = el;
            }}
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul
          className={toggle ? "nav-links show-nav " : "nav-links"}
          onMouseLeave={onMouseleaveToggle}
        >
          <li
            style={{ opacity: "0" }}
            ref={(el) => {
              list1 = el;
            }}
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
            style={{ opacity: "0" }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseleave}
            ref={(el) => {
              list2 = el;
            }}
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
            style={{ opacity: "0" }}
            ref={(el) => {
              event1 = el;
            }}
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
            style={{ opacity: "0" }}
            ref={(el) => {
              list3 = el;
            }}
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
            style={{ opacity: "0" }}
            ref={(el) => {
              list4 = el;
            }}
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

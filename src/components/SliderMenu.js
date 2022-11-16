import React from "react";
import classes from "./SliderMenu.module.css";
import NavItems from "./Home/Navbar/NavItems";

import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
const SliderMenu = ({ showSlider, setShowSlider }) => {
  const navItems = [
    {
      header: "Home",
      link: "/",
    },
    {
      header: "Place to stay",
      link: "/placetostay",
    },
    {
      header: "NFTs",
      to: "/",
    },
    {
      header: "Community",
      to: "/",
    },
  ];
  return (
    <div
      className={`${classes.background} ${
        showSlider ? classes.showMenu : classes.hideMenu
      }`}
    >
      <div
        className={`${classes.container} 
     
      `}
      >
        <div
          onClick={() => {
            setShowSlider(false);
          }}
          //   className={showSlider ? classes.showMenu : classes.hideMenu}
        >
          <IconContext.Provider
            value={{
              size: "2rem",

              color: "#a02279",
              className: classes.menu_icon,
            }}
          >
            <FaTimes />
          </IconContext.Provider>
        </div>
        <br />
        <br />
        {navItems.map((items) => {
          return (
            <div
              onClick={() => {
                setShowSlider(false);
              }}
            >
              <NavItems slider={true} items={items} />
            </div>
          );
        })}
        <hr />
      </div>
    </div>
  );
};

export default SliderMenu;

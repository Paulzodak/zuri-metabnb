import React from "react";
import classes from "./Navbar.module.css";
const NavItems = ({ slider, items }) => {
  if (items.to) {
    return <div className={classes.placetostay_slider}>{items.header}</div>;
  } else if (items.link) {
    return (
      <a
        className={`${
          slider ? classes.placetostay_slider : classes.placetostay
        }`}
        href={items.link}
      >
        {items.header}
      </a>
    );
  }
};

export default NavItems;

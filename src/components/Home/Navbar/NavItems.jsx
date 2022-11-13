import React from "react";
import classes from "./Navbar.module.css";
const NavItems = ({ items }) => {
  if (items.to) {
    return <div>{items.header}</div>;
  } else if (items.link) {
    return (
      <a className={classes.link} href={items.link}>
        {items.header}
      </a>
    );
  }
};

export default NavItems;

import React from "react";

const NavItems = ({ items }) => {
  if (items.to) {
    return <div>{items.header}</div>;
  } else if (items.link) {
    return <a href={items.link}>{items.header}</a>;
  }
  return <div>{items.header}</div>;
};

export default NavItems;

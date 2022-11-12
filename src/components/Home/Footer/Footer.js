import React from "react";
import classes from "./Footer.module.css";
import List from "./List";
const Footer = () => {
  const community = ["NFT", "Tokens", "Landlords", "Discord"];
  const places = ["Castle", "Farms", "Beach", "Learn more"];
  const aboutUs = ["Road map", "Creators", "Career", "Contact us"];

  return (
    <footer className={classes.footer}>
      <div className={classes.bordeer}></div>
      <List name={"Community"} props={community} />
      <List name={"Places"} props={places} />
      <List name={"About us"} props={aboutUs} />
    </footer>
  );
};

export default Footer;

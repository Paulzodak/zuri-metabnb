import React from "react";
import classes from "./Footer.module.css";
import List from "./List";
import Metabnb from "../../../images/LOGOS/MetabnbLogo";
import TwitterLogo from "../../../images/LOGOS/TwitterLogo";
import FacebookLogo from "../../../images/LOGOS/FacebookLogo";
import IntagramLogo from "../../../images/LOGOS/IntagramLogo";
import CopyrightLogo from "../../../images/LOGOS/CopyrightLogo";
const Footer = () => {
  const community = ["NFT", "Tokens", "Landlords", "Discord"];
  const places = ["Castle", "Farms", "Beach", "Learn more"];
  const aboutUs = ["Road map", "Creators", "Career", "Contact us"];

  return (
    <footer className={classes.footer}>
      <div className={classes.Metabnb}>
        <Metabnb />
        <div className={classes.social_icons}>
          <FacebookLogo />
          <IntagramLogo />
          <TwitterLogo />
        </div>
        <div className={classes.copyright}>
          <CopyrightLogo /> 2022 Metabnb
        </div>
      </div>
      <List name={"Community"} props={community} />
      <List name={"Places"} props={places} />
      <List name={"About us"} props={aboutUs} />
    </footer>
  );
};

export default Footer;

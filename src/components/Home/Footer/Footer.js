import React from "react";
import classes from "./Footer.module.css";
import List from "./List";
import Metabnb from "../../../images/LOGOS/MetabnbLogo";
import TwitterLogo from "../../../images/LOGOS/TwitterLogo";
import FacebookLogo from "../../../images/LOGOS/FacebookLogo";
import IntagramLogo from "../../../images/LOGOS/IntagramLogo";
import CopyrightLogo from "../../../images/LOGOS/CopyrightLogo";
const Footer = ({ screen }) => {
  const community = ["NFT", "Tokens", "Landlords", "Discord"];
  const places = ["Castle", "Farms", "Beach", "Learn more"];
  const aboutUs = ["Road map", "Creators", "Career", "Contact us"];

  return (
    <footer
      className={` ${classes.footer} ${screen.mobile ? classes.mobile : null}`}
    >
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
      <List screen={screen} name={"Community"} props={community} />
      <List screen={screen} name={"Places"} props={places} />
      <List screen={screen} name={"About us"} props={aboutUs} />
    </footer>
  );
};

export default Footer;

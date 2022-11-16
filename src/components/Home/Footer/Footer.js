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
  // console.log(screen);
  return (
    <footer
      className={` ${classes.footer} ${screen.tablet ? classes.tablet : null} ${
        screen.mobile ? classes.mobile : null
      } ${screen.smallScreens || screen.largeScreens ? classes.desktop : null}`}
    >
      <div
        className={`${screen.mobile ? classes.Metabnb_mobile : null} ${
          screen.tablet ? classes.Metabnb_tablet : null
        } ${
          screen.smallScreens || screen.largeScreens
            ? classes.Metabnb_desktop
            : null
        }`}
      >
        <Metabnb
          height={`${
            screen.mobile
              ? "20"
              : screen.tablet
              ? "30"
              : screen.smallScreens || screen.largeScreens
              ? "40"
              : null
          }`}
          width={`${
            screen.mobile
              ? "110"
              : screen.tablet
              ? "150"
              : screen.smallScreens || screen.largeScreens
              ? "200"
              : null
          }`}
        />
        <div
          className={`${classes.social_icons} ${
            screen.mobile ? classes.social_icons_mobile : null
          } ${screen.tablet ? classes.social_icons_tablet : null} ${
            screen.smallScreens || screen.largeScreens
              ? classes.social_icons_smallScreens
              : null
          } `}
        >
          <FacebookLogo />
          <IntagramLogo />
          <TwitterLogo />
        </div>
        <div
          className={` ${screen.tablet ? classes.copyright_tablet : null} ${
            screen.mobile ? classes.copyright_mobile : null
          } ${
            screen.smallScreens || screen.largeScreens
              ? classes.copyright_smallScreens
              : null
          }`}
        >
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

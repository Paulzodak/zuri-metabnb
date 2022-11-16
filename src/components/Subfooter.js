import React from "react";
import classes from "./Subfooter.module.css";
import MBtoken from "../images/page 1/MBtoken.svg";
import metamask from "../images/page 1/metamask.svg";
import opensea from "../images/page 1/opensea.svg";

const Subfooter = ({ screen }) => {
  return (
    <section
      className={`${classes.subfooter} ${
        screen.mobile ? classes.mobile : null
      }  ${screen.tablet ? classes.tablet : null} ${
        screen.smallScreens ? classes.smallScreens : null
      }`}
    >
      <img src={MBtoken} alt="" className={classes.logo} />
      <img src={metamask} alt="" className={classes.logo} />
      <img src={opensea} alt="" className={classes.logo} />
    </section>
  );
};

export default Subfooter;

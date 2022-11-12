import React from "react";
import classes from "./Subfooter.module.css";
import MBtoken from "../images/page 1/MBtoken.svg";
import metamask from "../images/page 1/metamask.svg";
import opensea from "../images/page 1/opensea.svg";

const Subfooter = () => {
  return (
    <section className={classes.subfooter}>
      <img src={MBtoken} alt="" className={classes.logo} />
      <img src={metamask} alt="" className={classes.logo} />
      <img src={opensea} alt="" className={classes.logo} />
    </section>
  );
};

export default Subfooter;

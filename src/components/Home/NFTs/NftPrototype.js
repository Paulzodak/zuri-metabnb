import React from "react";

import classes from "./NFT.module.css";
import stars from "../../../images/page 1/stars.svg";

const NftPrototype = ({ item }) => {
  return (
    <div className={classes.nft_container}>
      <img src={item.image} alt="" />
      <div className={`${classes.details_container}`}>
        <div>{item.name}</div>
        <div className={classes.float}>
          <b>{item.details}</b>
        </div>
        <div>{item.distance}</div>
        <div className={classes.float}>{item.available}</div>
        <img src={stars} alt="" />
      </div>
    </div>
  );
};

export default NftPrototype;

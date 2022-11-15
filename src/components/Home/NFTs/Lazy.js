import React from "react";
import classes from "./NFT.module.css";
import stars from "../../../images/page 1/stars.svg";
import { CloudinaryContext, Image } from "cloudinary-react";
const Lazy = ({ item }) => {
  return (
    <div className={classes.nft_container}>
      <CloudinaryContext cloudName="dxs8cpeae">
        <Image publicId={item.link} width="100%" />
      </CloudinaryContext>
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

export default Lazy;

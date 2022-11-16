import React from "react";
import classes from "./NFT.module.css";
import stars from "../../../images/page 1/stars.svg";
import { CloudinaryContext, Image } from "cloudinary-react";
import { Suspense, lazy } from "react";
import Skeleton from "./NftSkeleton";
const Pictures = lazy((screen, item) => import("./Pictures"));
const Lazy = ({ screen, item }) => {
  return (
    <div
      className={`${classes.nft_container}  ${
        screen.mobile ? classes.nft_container_mobile : null
      } ${screen.tablet ? classes.nft_container_tablet : null} ${
        screen.smallScreens || screen.largeScreens
          ? classes.nft_container_smallScreens
          : null
      }`}
    >
      <Suspense fallback={<Skeleton />}>
        <Pictures screen={screen} item={item} />
      </Suspense>

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

import React from "react";

import classes from "./NFT.module.css";
import stars from "../../../images/page 1/stars.svg";
import { Image } from "cloudinary-react";
import { Suspense, lazy } from "react";
import Skeleton from "./NftSkeleton";
const Lazy = lazy((item) => import("./Lazy"));

const NftPrototype = ({ item }) => {
  // <CloudinaryContext cloudName="dxs8cpeae">
  //       <Image
  //         publicId="https://res.cloudinary.com/dxs8cpeae/image/upload/v1668512204/ZURI-BNB/page%201/image_4_bvgxfd.svg"
  //         width="100%"
  //       />
  //     </CloudinaryContext>
  return (
    <Suspense fallback={<Skeleton />}>
      {/* <div className={classes.nft_container}>
        <img loading="lazy" src={item.image} alt="" />
        <div className={`${classes.details_container}`}>
          <div>{item.name}</div>
          <div className={classes.float}>
            <b>{item.details}</b>
          </div>
          <div>{item.distance}</div>
          <div className={classes.float}>{item.available}</div>
          <img src={stars} alt="" />
        </div>
      </div> */}
      <Lazy item={item} />
    </Suspense>
  );
};

export default NftPrototype;

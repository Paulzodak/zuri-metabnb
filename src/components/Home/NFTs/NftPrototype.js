import React from "react";

import classes from "./NFT.module.css";
import stars from "../../../images/page 1/stars.svg";
import { Image } from "cloudinary-react";
import { Suspense, lazy } from "react";
import Skeleton from "./NftSkeleton";
const Lazy = lazy((screen, item) => import("./Lazy"));

const NftPrototype = ({ screen, item }) => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Lazy screen={screen} item={item} />
    </Suspense>
  );
};

export default NftPrototype;

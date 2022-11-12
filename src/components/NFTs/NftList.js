import React from "react";
import NftPrototype from "./NftPrototype";
import classes from "./NFT.module.css";
const NftList = ({ NFTs }) => {
  return (
    <div className={`${classes.container} ${classes.desktop}`}>
      {NFTs.map((item) => {
        return <NftPrototype item={item} />;
      })}
    </div>
  );
};

export default NftList;

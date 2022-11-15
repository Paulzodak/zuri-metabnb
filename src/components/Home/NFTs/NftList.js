import React from "react";
import NftPrototype from "./NftPrototype";
import classes from "./NFT.module.css";
const NftList = ({ screen, NFTs }) => {
  return (
    <div
      className={`${classes.container} ${
        screen.tablet ? classes.tablet : classes.desktop
      } ${screen.mobile ? classes.mobile : classes}`}
    >
      {NFTs.map((item) => {
        return <NftPrototype item={item} />;
      })}
    </div>
  );
};

export default NftList;

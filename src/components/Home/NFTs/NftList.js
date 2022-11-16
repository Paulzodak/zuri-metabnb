import React from "react";
import NftPrototype from "./NftPrototype";
import classes from "./NFT.module.css";
const NftList = ({ screen, NFTs }) => {
  return (
    <div
      className={`${classes.container} ${
        screen.tablet ? classes.tablet : null
      } ${screen.mobile ? classes.mobile : null}  ${
        screen.smallScreens ? classes.desktop : null
      } ${screen.largeScreens ? classes.desktop : null}`}
    >
      {NFTs.map((item) => {
        return <NftPrototype item={item} />;
      })}
    </div>
  );
};

export default NftList;

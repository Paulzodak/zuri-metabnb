import React from "react";
import classes from "./SectionThree.module.css";
import nft1 from "../../../images/page 1/image 13.svg";
import nft2 from "../../../images/page 1/image 14.svg";
import nft3 from "../../../images/page 1/image 15.svg";
import nftFrame from "../../../images/page 1/nfts_frame.png";

import { CloudinaryContext, Image } from "cloudinary-react";

const SectionThree = ({ screen }) => {
  console.log(screen);
  return (
    <section
      className={`${classes.container}  ${
        screen.tablet ? classes.tablet : null
      } ${screen.mobile ? classes.mobile : null}
        ${screen.smallScreens ? classes.smallScreens : null}
        ${screen.largeScreens ? classes.smallScreens : null}
      }`}
    >
      <div
        className={`${
          screen.mobile ? classes.details_mobile : classes.details
        }`}
      >
        <h1>Metabnb NFTs</h1>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button>Learn more</button>
      </div>
      <div className={`${classes.nft_container}`}>
        <img src={nftFrame} alt={""} className={classes.nft_frame} />
        {/* <CloudinaryContext cloudName="dxs8cpeae">
          <div
            className={`${classes.nft11}  ${classes.nfts} ${
              screen.mobile ? classes.nft_mobile : null
            } ${screen.mobile ? classes.nft1_mobile : null}`}
          >
            <Image
              publicId={
                "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668512173/ZURI-BNB/page%201/image_13_y2lhzk.svg"
              }
              width="100%"
              height="100%"
            />
          </div>
          <div
            className={`${classes.nft22} ${classes.nfts}   ${
              screen.mobile ? classes.nft_mobile : null
            } ${screen.mobile ? classes.nft2_mobile : null}`}
          >
            <Image
              publicId={
                "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668512176/ZURI-BNB/page%201/image_14_rnajmx.svg"
              }
              width="100%"
              height="100%"
            />
          </div>
          <div
            className={`${classes.nft33} ${classes.nfts}   ${
              screen.mobile ? classes.nft_mobile : null
            } ${screen.mobile ? classes.nft3_mobile : null}`}
          >
            <Image
              publicId={
                "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668543680/ZURI-BNB/page%201/image_15_t5efel.svg"
              }
              width="100%"
              height="100%"
            />
          </div>
        </CloudinaryContext> */}
        {/* <img
          src={nft1}
          alt=""
          className={`${classes.nft11}  ${classes.nfts} ${
            screen.mobile ? classes.nft_mobile : null
          } ${screen.mobile ? classes.nft1_mobile : null} ${
            screen.smallScreens || screen.largeScreens ? classes.nft1 : null
          }`}
        />
        <img
          src={nft2}
          alt=""
          className={`${classes.nft22} ${classes.nfts}   ${
            screen.mobile ? classes.nft_mobile : null
          } ${screen.mobile ? classes.nft2_mobile : null} ${
            screen.smallScreens || screen.largeScreens ? classes.nft2 : null
          }`}
        />
        <img
          src={nft3}
          alt=""
          className={` ${classes.nfts}   ${
            screen.mobile ? classes.nft_mobile : null
          } ${screen.mobile ? classes.nft3_mobile : null} ${
            screen.smallScreens || screen.largeScreens ? classes.nft3 : null
          }`}
        /> */}
      </div>
    </section>
  );
};

export default SectionThree;

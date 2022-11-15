import React from "react";
import classes from "./SectionOne.module.css";
// import nft1 from "../../../images/page 1/image 1.svg";
// import nft2 from "../../../images/page 1/image 2.svg";
// import nft3 from "../../../images/page 1/image 3.svg";
// import nft4 from "../../../images/page 1/image 4.svg";
import { CloudinaryContext, Image } from "cloudinary-react";

const SectionOne = ({ screen }) => {
  return (
    <section
      className={`${classes.container} ${
        screen.mobile ? classes.mobile : classes.desktop
      } ${classes.bordeer}`}
    >
      <h1 className={classes.bordeer}>
        Rent a <span className={classes.coloured_text}>Place</span> away from{" "}
        <span className={classes.coloured_text}>Home</span> in the{" "}
        <span className={classes.coloured_text}>Metaverse</span>
        <div>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </div>
        <div className={`${classes.search_container} ${classes.bordeer}`}>
          <input
            placeholder="Search for location"
            className={`${classes.search_input}`}
          />
          <button className={`${classes.search_btn}`}>Search</button>
        </div>
      </h1>
      {!screen.mobile ? (
        <div
          className={`${
            screen.tablet ? classes.nft_container_tablet : classes.nft_container
          } ${classes.bordeer}`}
        >
          <div className={`${classes.nft_container_1} ${classes.bordeer}`}>
            <CloudinaryContext cloudName="dxs8cpeae">
              <Image
                publicId={
                  "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668512159/ZURI-BNB/page%201/image_2_fkbkly.svg"
                }
                width="100%"
              />
              <Image
                publicId={
                  "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668543127/ZURI-BNB/page%201/image_4_kcokfv.svg"
                }
                width="100%"
              />
            </CloudinaryContext>
            {/* <img src={nft2} alt="" />
            <img src={nft4} alt="" /> */}
          </div>
          {!screen.tablet ? (
            <div className={`${classes.nft_container_2} ${classes.bordeer}`}>
              <CloudinaryContext cloudName="dxs8cpeae">
                <Image
                  publicId={
                    "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668543148/ZURI-BNB/page%201/image_1_fdaqa1.svg"
                  }
                  width="100%"
                />
                <Image
                  publicId={
                    "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668543128/ZURI-BNB/page%201/image_3_s9nq1n.svg"
                  }
                  width="100%"
                />
              </CloudinaryContext>
              {/* <img src={nft1} alt="" />
              <img src={nft3} alt="" /> */}
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default SectionOne;

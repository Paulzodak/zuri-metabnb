import React from "react";
import classes from "./SectionOne.module.css";
import nft1 from "../../images/page 1/image 1.svg";
import nft2 from "../../images/page 1/image 2.svg";
import nft3 from "../../images/page 1/image 3.svg";
import nft4 from "../../images/page 1/image 4.svg";

const SectionOne = () => {
  const mobile = false;
  return (
    <section className={`${classes.container} ${classes.bordeer}`}>
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
      <div
        className={`${
          mobile ? classes.nft_container_mobile : classes.nft_container
        } ${classes.bordeer}`}
      >
        <div className={`${classes.nft_container_1} ${classes.bordeer}`}>
          <img src={nft2} alt="" />
          <img src={nft4} alt="" />
        </div>
        {!mobile ? (
          <div className={`${classes.nft_container_2} ${classes.bordeer}`}>
            <img src={nft1} alt="" />
            <img src={nft2} alt="" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default SectionOne;

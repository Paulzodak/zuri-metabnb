import React from "react";
import classes from "./SectionThree.module.css";
import nft1 from "../../../images/page 1/image 13.svg";
import nft2 from "../../../images/page 1/image 14.svg";
import nft3 from "../../../images/page 1/image 15.svg";

const SectionThree = () => {
  return (
    <section className={classes.container}>
      <div>
        <h1>Metabnb NFTs</h1>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button>Learn more</button>
      </div>
    </section>
  );
};

export default SectionThree;

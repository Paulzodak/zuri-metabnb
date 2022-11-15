import React, { useEffect } from "react";
import classes from "./SectionTwo.module.css";
import NftList from "../NFTs/NftList";
import { useState } from "react";
import axios from "axios";
// import Nft1 from "../../../images/page 1/image 5.svg";
// import Nft2 from "../../../images/page 1/image 6.svg";
// import Nft3 from "../../../images/page 1/image 7.svg";
// import Nft4 from "../../../images/page 1/image 8.svg";
// import Nft5 from "../../../images/page 1/image 9.svg";
// import Nft6 from "../../../images/page 1/image 10.svg";
// import Nft7 from "../../../images/page 1/image 11.svg";
// import Nft8 from "../../../images/page 1/image 12.svg";
const SectionTwo = ({ screen }) => {
  const NFTs = [
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: Nft1,
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668512161/ZURI-BNB/page%201/image_5_hsodct.svg",
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668512162/ZURI-BNB/page%201/image_6_oxz4af.svg",
      // image: Nft2,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668512172/ZURI-BNB/page%201/image_7_hfxqyl.svg",
      // image: Nft3,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668512167/ZURI-BNB/page%201/image_8_dbeoza.svg",
      // image: Nft4,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668512170/ZURI-BNB/page%201/image_9_g4ld1n.svg",
      // image: Nft5,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668512167/ZURI-BNB/page%201/image_10_idoh7h.svg",
      // image: Nft6,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668512167/ZURI-BNB/page%201/image_11_munevr.svg",
      // image: Nft7,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668512175/ZURI-BNB/page%201/image_12_s5y7rh.svg",
      // image: Nft8,
    },
  ];
  return (
    <section className={classes.border}>
      <h1>Inspiration for your next adventure</h1>
      <div className={classes.nft_container}>
        <NftList screen={screen} NFTs={NFTs} />
      </div>
    </section>
  );
};

export default SectionTwo;

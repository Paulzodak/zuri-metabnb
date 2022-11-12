import React from "react";
import classes from "./SectionTwo.module.css";
import NftList from "../NFTs/NftList";
import Nft1 from "../../images/page 1/image 5.svg";
import Nft2 from "../../images/page 1/image 6.svg";
import Nft3 from "../../images/page 1/image 7.svg";
import Nft4 from "../../images/page 1/image 8.svg";
import Nft5 from "../../images/page 1/image 9.svg";
import Nft6 from "../../images/page 1/image 10.svg";
import Nft7 from "../../images/page 1/image 11.svg";
import Nft8 from "../../images/page 1/image 12.svg";
const SectionTwo = () => {
  const NFTs = [
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: Nft1,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: Nft2,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: Nft3,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: Nft4,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: Nft5,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: Nft6,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: Nft7,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: Nft8,
    },
  ];
  return (
    <section className={classes.border}>
      <h1>Inspiration for your next adventure</h1>
      <div className={classes.nft_container}>
        <NftList NFTs={NFTs} />
      </div>
    </section>
  );
};

export default SectionTwo;

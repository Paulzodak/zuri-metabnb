import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import classes from "./PlaceToStay.module.css";
import { useState } from "react";
import Modal from "../../components/Modal";
import Footer from "../../components/Home/Footer/Footer";
import Places from "../../components/PlaceToStay/Places";
import NftList from "../../components/Home/NFTs/NftList";
import nft1 from "../../images/placetostay/Frame 151.svg";
import nft2 from "../../images/placetostay/Frame 151-1.svg";
import nft3 from "../../images/placetostay/Frame 151-2.svg";
import nft4 from "../../images/placetostay/Frame 151-3.svg";
import nft5 from "../../images/placetostay/Frame 151-4.svg";
import nft6 from "../../images/placetostay/Frame 151-5.svg";
import nft7 from "../../images/placetostay/Frame 151-6.svg";
import nft8 from "../../images/placetostay/Frame 151-7.svg";
import nft9 from "../../images/placetostay/Frame 151-8.svg";
import nft10 from "../../images/placetostay/Frame 151-9.svg";
import nft11 from "../../images/placetostay/Frame 151-10.svg";
import nft12 from "../../images/placetostay/Frame 151-11.svg";
import nft13 from "../../images/placetostay/Frame 151-12.svg";
import nft14 from "../../images/placetostay/Frame 151-13.svg";
import nft15 from "../../images/placetostay/Frame 151-14.svg";
import nft16 from "../../images/placetostay/Frame 151-15.svg";
const PlaceToStay = () => {
  const [showModal, setShowModal] = useState(false);
  const NFTs = [
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: nft1,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: nft2,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: nft3,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: nft4,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: nft5,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: nft6,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: nft7,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: nft8,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: nft9,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: nft10,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: nft11,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: nft12,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: nft13,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: nft14,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: nft15,
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      image: nft16,
    },
  ];

  return (
    <section>
      <Navbar setShowModal={setShowModal} />
      <Places />
      <NftList NFTs={NFTs} />
      <div className={classes.margin} />
      <>{showModal ? <Modal setShowModal={setShowModal} /> : null}</>
      <Footer />
    </section>
  );
};

export default PlaceToStay;

import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import classes from "./PlaceToStay.module.css";
import { useState } from "react";
import Modal from "../../components/Modal";
import Footer from "../../components/Home/Footer/Footer";
import Places from "../../components/PlaceToStay/Places";
import NftList from "../../components/Home/NFTs/NftList";
// import nft1 from "../../images/placetostay/Frame 151.svg";
// import nft2 from "../../images/placetostay/Frame 151-1.svg";
// import nft3 from "../../images/placetostay/Frame 151-2.svg";
// import nft4 from "../../images/placetostay/Frame 151-3.svg";
// import nft5 from "../../images/placetostay/Frame 151-4.svg";
// import nft6 from "../../images/placetostay/Frame 151-5.svg";
// import nft7 from "../../images/placetostay/Frame 151-6.svg";
// import nft8 from "../../images/placetostay/Frame 151-7.svg";
// import nft9 from "../../images/placetostay/Frame 151-8.svg";
// import nft10 from "../../images/placetostay/Frame 151-9.svg";
// import nft11 from "../../images/placetostay/Frame 151-10.svg";
// import nft12 from "../../images/placetostay/Frame 151-11.svg";
// import nft13 from "../../images/placetostay/Frame 151-12.svg";
// import nft14 from "../../images/placetostay/Frame 151-13.svg";
// import nft15 from "../../images/placetostay/Frame 151-14.svg";
// import nft16 from "../../images/placetostay/Frame 151-15.svg";
const PlaceToStay = () => {
  const [showModal, setShowModal] = useState(false);
  const NFTs = [
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: nft1,
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668538895/ZURI-BNB/placetostay/Frame_151_lq8w7x.svg",
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: nft2,

      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668538841/ZURI-BNB/placetostay/Frame_151-1_alriso.svg",
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: nft3,

      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668538840/ZURI-BNB/placetostay/Frame_151-2_tgvwz4.svg",
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: nft4,

      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668538845/ZURI-BNB/placetostay/Frame_151-4_notdzg.svg",
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: nft5,
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668538860/ZURI-BNB/placetostay/Frame_151-5_l2alzk.svg",
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: nft6,
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668538901/ZURI-BNB/placetostay/Frame_151-6_gdqwf5.svg",
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: nft7,

      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668538883/ZURI-BNB/placetostay/Frame_151-7_rq2uvu.svg",
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: nft8,

      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668538883/ZURI-BNB/placetostay/Frame_151-8_noz8vk.svg",
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: nft9,
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668538864/ZURI-BNB/placetostay/Frame_151-9_thhcpf.svg",
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: nft10,
      link: " https://res.cloudinary.com/dxs8cpeae/image/upload/v1668538864/ZURI-BNB/placetostay/Frame_151-9_thhcpf.svg",
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: nft11,
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668538887/ZURI-BNB/placetostay/Frame_151-10_qqbcrm.svg",
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: nft12,
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668538884/ZURI-BNB/placetostay/Frame_151-11_s4irsy.svg",
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: nft13,
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668538895/ZURI-BNB/placetostay/Frame_151-12_lvsmz6.svg",
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: nft14,
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668538917/ZURI-BNB/placetostay/Frame_151-13_ykytre.svg",
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: nft15,
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668538927/ZURI-BNB/placetostay/Frame_151-14_qfzmun.svg",
    },
    {
      name: "Desert King",
      details: "1MBT per night",
      distance: "2345km away",
      available: "available for 2weeks stay",
      // image: nft16,
      link: "https://res.cloudinary.com/dxs8cpeae/image/upload/v1668538901/ZURI-BNB/placetostay/Frame_151-15_xahox1.svg",
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

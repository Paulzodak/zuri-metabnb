import React from "react";
import Metabnb from "../../../images/page 1/Metabnb.svg";
import Metalogo from "../../../images/page 1/Metalogo.svg";
import classes from "./Navbar.module.css";
import NavItems from "./NavItems";
const Navbar = ({ setShowModal }) => {
  const navItems = [
    {
      header: "Home",
      to: "n",
    },
    {
      header: "Place to stay",
      link: "/placetostay",
    },
    {
      header: "NFTs",
      to: "b",
    },
    {
      header: "Community",
      to: "n",
    },
  ];
  return (
    <nav className={`${classes.Navbar} ${classes.bordeer}`}>
      <div className={classes.bordeer}>
        <img alt="" src={Metalogo} className={classes.Metalogo} />
        <img alt="" src={Metabnb} className={classes.Metabnb} />
      </div>
      <div className={`${classes.bordeer} ${classes.NavItems}`}>
        {navItems.map((items) => {
          return <NavItems key={items.header} items={items} />;
        })}
      </div>
      <div className={classes.bordeer}>
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className={`${classes.connectWallet}`}
        >
          Connect wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

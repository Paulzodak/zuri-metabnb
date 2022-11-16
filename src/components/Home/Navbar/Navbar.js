import React from "react";
import Metabnb from "../../../images/page 1/Metabnb.svg";
import Metalogo from "../../../images/page 1/Metalogo.svg";
import classes from "./Navbar.module.css";
import NavItems from "./NavItems";
import { FaListUl } from "react-icons/fa";
import { IconContext } from "react-icons";
const Navbar = ({ setShowSlider, screen, setShowModal }) => {
  const navItems = [
    {
      header: "Home",
      link: "/",
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
    <nav
      className={`${screen.mobile ? classes.Navbar_mobile : null} ${
        screen.tablet ? classes.Navbar_tablet : null
      }  ${
        screen.smallScreens || screen.largeScreens
          ? classes.Navbar_smallScreens
          : null
      } ${classes.border}`}
    >
      <>
        {screen.mobile || screen.tablet ? (
          <div
            onClick={() => {
              setShowSlider(true);
            }}
          >
            <IconContext.Provider
              value={{
                size: "2rem",

                color: "#a02279",
                className: classes.menu_icon,
              }}
            >
              <FaListUl />
            </IconContext.Provider>
          </div>
        ) : (
          <></>
        )}
      </>
      <div className={classes.border}>
        <img alt="" src={Metalogo} className={classes.Metalogo} />
        <img alt="" src={Metabnb} className={classes.Metabnb} />
      </div>
      {!screen.mobile && !screen.tablet ? (
        <div className={`${classes.border} ${classes.NavItems}`}>
          {navItems.map((items) => {
            return <NavItems key={items.header} items={items} />;
          })}
        </div>
      ) : (
        <></>
      )}
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

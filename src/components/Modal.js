import React from "react";
import classes from "./Modal.module.css";
import closebtn from "../images/page 1/close.svg";
import RightcaretLogo from "../images/LOGOS/RIghtcaretLogo";
import MetamaskLogo from "../images/page 1/wolve.svg";
import WalletconnectLogo from "../images/page 1/walletconnect.svg";
const Modal = ({ setShowModal, mobile }) => {
  const wallet = [
    {
      name: " Metamask",
      logo: MetamaskLogo,
    },
    {
      name: "WalletConnect",
      logo: WalletconnectLogo,
    },
  ];
  return (
    <section className={`${classes.container}`}>
      <div
        className={` ${mobile ? classes.mobile : null}  ${
          classes.modal_content_container
        }`}
      >
        <h1>Connect wallet</h1>
        <img
          onClick={() => {
            setShowModal(false);
          }}
          src={closebtn}
          alt=""
        />
        <hr />
        <p>Choose your preferred wallet:</p>
        <div className={classes.wallet_container}>
          {wallet.map((item) => {
            return (
              <>
                <div className={classes.wallet}>
                  <img className={classes.wallet_icon} src={item.logo} alt="" />
                  <span className={classes.wallet_text}> {item.name}</span>
                  <RightcaretLogo margin="1rem 1rem" float={"right"} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Modal;

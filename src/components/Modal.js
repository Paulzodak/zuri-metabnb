import React from "react";
import classes from "./Modal.module.css";
import closebtn from "../images/page 1/close.svg";
const Modal = ({ setShowModal }) => {
  const wallet = [
    {
      name: " Metamask",
    },
    {
      name: "WalletConnect",
    },
  ];
  return (
    <section className={classes.container}>
      <div className={classes.modal_content_container}>
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
      </div>
    </section>
  );
};

export default Modal;

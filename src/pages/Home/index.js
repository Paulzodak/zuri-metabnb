import React, { useState } from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import SectionOne from "../../components/Home/SectionOne/SectionOne";
import Subfooter from "../../components/Subfooter";
import SectionTwo from "../../components/Home/SectionTwo/SectionTwo";
import SectionThree from "../../components/Home/SectionThree/SectionThree";
import Modal from "../../components/Modal";
import Footer from "../../components/Home/Footer/Footer";
const Index = ({ screen }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar screen={screen} setShowModal={setShowModal} />
      <SectionOne screen={screen} />
      <Subfooter screen={screen} />
      <SectionTwo screen={screen} />
      <SectionThree screen={screen} />
      <>
        {showModal ? (
          <Modal
            mobile={screen.mobile ? true : false}
            setShowModal={setShowModal}
          />
        ) : null}
      </>
      <Footer screen={screen} />
    </>
  );
};

export default Index;

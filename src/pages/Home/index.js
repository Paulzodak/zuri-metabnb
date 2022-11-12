import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SectionOne from "../../components/SectionOne/SectionOne";
import Subfooter from "../../components/Subfooter";
import SectionTwo from "../../components/SectionTwo/SectionTwo";
import SectionThree from "../../components/SectionThree/SectionThree";
import Modal from "../../components/Modal";
const Index = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <Navbar />
      <SectionOne />
      <Subfooter />
      <SectionTwo />
      <SectionThree />
      <>{showModal ? <Modal /> : null}</>
    </>
  );
};

export default Index;

import React, { useState } from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import SectionOne from "../../components/Home/SectionOne/SectionOne";
import Subfooter from "../../components/Subfooter";
import SectionTwo from "../../components/Home/SectionTwo/SectionTwo";
import SectionThree from "../../components/Home/SectionThree/SectionThree";
import Modal from "../../components/Modal";
const Index = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar setShowModal={setShowModal} />
      <SectionOne />
      <Subfooter />
      <SectionTwo />
      <SectionThree />
      <>{showModal ? <Modal setShowModal={setShowModal} /> : null}</>
    </>
  );
};

export default Index;

import React from "react";
import { CloudinaryContext, Image } from "cloudinary-react";
const Pictures = ({ item }) => {
  return (
    <CloudinaryContext cloudName="dxs8cpeae">
      <Image publicId={item.link} width="100%" />
    </CloudinaryContext>
  );
};

export default Pictures;

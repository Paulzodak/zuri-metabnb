import React from "react";
import stars from "../../../images/page 1/stars.svg";
import { CloudinaryContext, Image } from "cloudinary-react";
import classes from "./Skeleton.module.css";
import ContentLoader from "react-content-loader";
const Skeleton = (props) => {
  return (
    <div className={classes.nft_container}>
      <ContentLoader
        speed={2}
        width={250}
        height={300}
        viewBox="0 0 200 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="-43" y="-212" rx="2" ry="2" width="400" height="400" />
        <circle cx="114" cy="615" r="81" />
        <circle cx="244" cy="403" r="54" />
        <rect x="318" y="124" rx="0" ry="0" width="50" height="109" />
        <rect x="1" y="212" rx="8" ry="8" width="193" height="13" />
        <rect x="3" y="247" rx="8" ry="8" width="193" height="13" />
        <rect x="3" y="289" rx="8" ry="8" width="193" height="13" />
      </ContentLoader>
    </div>
    //     <div className={classes.nft_container}>
    //       <div></div>
    //       <div className={`${classes.details_container}`}>
    //         <div></div>
    //         <div className={classes.float}>
    //           <b></b>
    //         </div>
    //         <div></div>
    //         <div className={classes.float}></div>
    //         <img src={""} alt="" />
    //       </div>
    //     </div>
  );
};

export default Skeleton;

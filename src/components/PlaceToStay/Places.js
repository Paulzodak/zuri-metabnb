import React from "react";
import classes from "./Places.module.css";
import SettingsLogo from "../../images/LOGOS/SettingsLogo";
const Places = ({ screen }) => {
  const places = [
    { name: "Restaurant" },
    { name: "Cottage" },
    { name: "Castle" },
    { name: "fantest city" },
    { name: "beach" },
    { name: "Cabins" },
    { name: "Off-grid" },
    { name: "Farm" },
  ];
  return (
    <section
      className={
        screen.mobile || screen.tablet ? classes.places_mobile : classes.places
      }
    >
      {places.map((item) => {
        return <div className={classes.placestostay}>{item.name}</div>;
      })}
      <div className={classes.search_container}>
        <input placeholder="Location" className={classes.search}></input>
        <div className={classes.settings}>
          <SettingsLogo />
        </div>
      </div>
    </section>
  );
};

export default Places;

import React from "react";
import classes from "./Places.module.css";
const Places = () => {
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
    <section className={classes.places}>
      {places.map((item) => {
        return <div>{item.name}</div>;
      })}
      <div className={classes.search}></div>
    </section>
  );
};

export default Places;

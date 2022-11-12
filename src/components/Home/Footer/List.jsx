import React from "react";
import classes from "./Footer.module.css";
const List = ({ name, props }) => {
  return (
    <div className={`${classes.bordeer} ${classes.community}`}>
      <h1>{name}</h1>

      {props.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
};

export default List;

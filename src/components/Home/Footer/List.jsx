import React from "react";
import classes from "./Footer.module.css";
const List = ({ screen, name, props }) => {
  return (
    <div className={`${classes.bordeer} ${classes.header}`}>
      <h1 className={`${screen.mobile ? classes.name_mobile : null}`}>
        {name}
      </h1>

      {props.map((item) => {
        return (
          <div
            className={`${screen.mobile ? classes.items_mobile : null}`}
            key={item}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default List;

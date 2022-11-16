import React from "react";
import classes from "./Footer.module.css";
const List = ({ screen, name, props }) => {
  return (
    <div className={`${classes.bordeer} ${classes.header}`}>
      <h1
        className={`${screen.mobile ? classes.name_mobile : null} ${
          screen.tablet ? classes.name_tablet : null
        } ${
          screen.smallScreens || screen.largeScreens
            ? classes.name_smallScreens
            : null
        }`}
      >
        {name}
      </h1>

      {props.map((item) => {
        return (
          <div
            className={`${screen.tablet ? classes.items_tablet : null} ${
              screen.mobile ? classes.items_mobile : null
            } ${screen.tablet ? classes.items_tablet : null} ${
              screen.smallScreens || screen.largeScreens
                ? classes.items_smallScreens
                : null
            }`}
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

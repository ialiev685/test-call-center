import React from "react";
import Icons from "./symbol-defs.svg#";

export const IconsNavigation = ({ name, style }) => {
  return (
    <svg
      width="24"
      height="24"
      style={{
        marginRight: "12px",
        ...style,
      }}
    >
      <use href={`${Icons}#icon-${name}`}></use>
    </svg>
  );
};

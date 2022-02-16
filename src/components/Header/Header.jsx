import React from "react";
//style
import "./Header.scss";
//helper
import { getDateForHeader } from "../../helpers";

export const Header = () => {
  return (
    <header className="header">
      <span className="header__clock">{getDateForHeader()}</span>
    </header>
  );
};

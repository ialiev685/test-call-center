import React from "react";
//style
import "./Header.scss";
//helper
import { getDateForHeader } from "../../helpers";

export const Header = () => {
  const dateNow = new Date();

  const date = dateNow.getDate();
  const day = dateNow.getDay();
  const month = dateNow.getMonth();

  return (
    <header className="header">
      <span className="header__clock">{getDateForHeader()}</span>
    </header>
  );
};

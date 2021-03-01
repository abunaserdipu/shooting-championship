import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-name">Shooting Championship</h1>
      <nav>
        <a href="/about">About</a>
        <a href="/schedule">Tournament Schedule</a>
        <a href="/sponsor">Sponsorship</a>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import "./style.scss";
import logo from "../../assets/logo.png";
import SecondaryNavigation from "../SecondaryNavigation";

const Navbar = () => {
  const navItems = ["Home", "TV Shows", "Movies", "New & Popular", "My List"];

  return (
    <div className="navigation">
      <div className="left-nav">
        <img src={logo} alt="logo" />
        <ul className="navigationList">
          {navItems.map((item) => (
            <li key={item}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <SecondaryNavigation />
    </div>
  );
};

export default Navbar;

import React from "react";
import "./style.scss";
import Search from "../Search";
import Notifications from "../Notifications";
import UserMenu from "../UserMenu";
import BillboardSettings from "../BillboardSettings";

const SecondaryNavigation = () => {
  return (
    <div className="box">
      <div className="navItem">
        <Search />
      </div>
      <div className="navItem">
        <Notifications />
      </div>
      <div className="navItem">
        <UserMenu />
      </div>
      <div className="navItem">
        <BillboardSettings />
      </div>
    </div>
  );
};

export default SecondaryNavigation;

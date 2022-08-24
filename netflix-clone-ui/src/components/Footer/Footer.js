import React from "react";
import "./style.scss";
import SocialLinks from "../SocialLinks";
import FooterLinks from "../FooterLinks";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="socialLinks">
          <SocialLinks />
        </div>
        <FooterLinks />
      </footer>
    </div>
  );
};

export default Footer;

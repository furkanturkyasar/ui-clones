import React from "react";
import "./style.scss";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import TwitterIcon from "./TwitterIcon";
import YoutubeIcon from "./YoutubeIcon";

const SocialLinks = () => {
  return (
    <div className="socialBox">
      <a href="/" className="iconLink">
        <FacebookIcon />
      </a>
      <a href="/" className="iconLink">
        <InstagramIcon />
      </a>
      <a href="/" className="iconLink">
        <TwitterIcon />
      </a>
      <a href="/" className="iconLink">
        <YoutubeIcon />
      </a>
    </div>
  );
};

export default SocialLinks;

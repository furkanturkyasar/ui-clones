import React from "react";
import "./style.scss";

const FooterLinks = () => {
  const links = [
    "Audio and Subtitles",
    "Audio Description",
    "Help Center",
    "Gift Cards",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Terms of Use",
    "Privacy",
    "Legal Notices",
    "Cookie Preferences",
    "Impressum",
    "Contact us",
  ];

  return (
    <ul className="linksList">
      {links.map((link) => (
        <li key={link} className="link">
          <a href="/">{link}</a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;

import React from "react";
import "./style.scss";
import Segment from "../Segment";

const Titles = () => {
  return (
    <div className="titles">
      <Segment title="Popular on Netflix" />
      <Segment title="Continue watching for Home" />
      <Segment title="Trending now" />
      <Segment title="Watch it again" />
    </div>
  );
};

export default Titles;

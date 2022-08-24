import React from "react";
import "./style.scss";
import placeholderImg from "../../assets/thumbnail-top10-h.jpg";
import ChevronRightIcon from "./ChevronRightIcon";

const Segment = ({ title }) => {
  return (
    <div className="slider">
      <p className="title">
        {title}
        <span className="left-icon">
          <svg
            width="12"
            height="10"
            viewBox="0 0 23 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 3L21 20.5L3.5 38"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </p>
      <div className="row">
        <img src={placeholderImg} alt="" />
        <img src={placeholderImg} alt="" />
        <img src={placeholderImg} alt="" />
        <img src={placeholderImg} alt="" />
        <img src={placeholderImg} alt="" />
        <img src={placeholderImg} alt="" />
        <button className="iconButton">
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Segment;

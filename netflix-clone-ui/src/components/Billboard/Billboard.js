import React from "react";
import "./style.scss";
import billboard from "../../assets/billboard.webp";
import billboardTitle from "../../assets/billboard-title.webp";
import PlayIcon from "./PlayIcon";
import InfoIcon from "./InfoIcon";

const Billboard = () => {
  return (
    <div className="billboard">
      <div className="innerBillboard">
        <img src={billboard} alt="billboard" />
        <div className="fadeOut"></div>
        <div className="info">
          <img src={billboardTitle} alt="Abstract: The Art of Design" />
          <div className="description">
            Step inside the minds of the most innovative designers in a variety
            of disciplines and learn how design impacts every aspect of life.
          </div>
          <div className="linksButton">
            <button>
              <PlayIcon />
              <span>Play</span>
            </button>
            <button id="infoSpan">
              <InfoIcon />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;

import React from "react";

import upArrow from "../../../../assets/images/upArrow.svg";
import downArrow from "../../../../assets/images/downArrow.svg";
import "./MiniChart.scss";

function MiniChart({ id, name, amount, percentage }) {
  return (
    <div className="MiniChart">
      <div className="textBlock">
        <h1 className="title">{name}</h1>
        <p className="views">{amount}</p>
        {percentage > 0 ? (
          <p className="percentageText" style={{ color: "#3CC480" }}>
            <img className="arrowImage" alt="arrow" src={upArrow} />
            {percentage}%
          </p>
        ) : (
          <p className="percentageText" style={{ color: "#FD4141" }}>
            <img className="arrowImage" alt="arrow" src={downArrow} />
            {percentage * -1}%
          </p>
        )}
      </div>
      <div id={id} />
    </div>
  );
}

export default MiniChart;

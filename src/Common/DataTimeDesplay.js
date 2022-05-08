import React from "react";
import "../Styles/Timer.css";
const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <p className="value">{value}</p>
      <span className="type">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;

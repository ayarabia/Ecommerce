import React from "react";
import "../Styles/Price.css";
import Timer from "../Common/Timer";
function Price() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div className="price">
      <div className="container">
        <div className="bestprice">
          <p className="first">Best Price For You</p>
          <h1>Deal of the day</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
          <p>Spinach</p>
          <p>
            <span>$10</span> now $5 only
          </p>
          <Timer targetDate={dateTimeAfterThreeDays}></Timer>
        </div>
      </div>
    </div>
  );
}

export default Price;

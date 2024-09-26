import React, { useContext } from "react";
import "./tab.css";
import { weatherContext } from "../../App";

function Tab({ title, index }) {
  const { setSelectedDay, selectedDay } = useContext(weatherContext);
  return (
    <div className={`tab ${selectedDay === index ? "selectedTab" : ""}`}>
      <p className="tabTitle" onClick={() => setSelectedDay(index)}>
        {title}
      </p>
    </div>
  );
}

export default Tab;

import React, { useContext } from "react";
import "./weatherdisplay.css";
import { weatherContext } from "../../App";

function Weatherdisplay() {
  const { data } = useContext(weatherContext);

  if (!data) {
    return <></>;
  }

  const { current, location } = data;
  const { temp_c, condition } = current;
  const { name, country, tz_id } = location;

  const currentTime = new Date().toLocaleTimeString("en-US", {
    timeZone: tz_id,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="flexContainer">
      <div className="textContainer">
        <p>
          {temp_c}° in {name},<br />
          {country}
        </p>
        <p className="weatherDescription">{condition.text}</p>
      </div>
      <div className="iconContainer">
        <img
          src={condition.icon}
          className="weatherLogo"
          alt="weatherLogo"
        ></img>
      </div>
      <p className="timeElement">{currentTime}</p>
    </div>
  );
}

export default Weatherdisplay;

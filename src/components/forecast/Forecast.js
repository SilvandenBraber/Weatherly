import React, { useContext } from "react";
import "./forecast.css";
import ForecastElement from "./forecastelement/ForecastElement";
import { weatherContext } from "../../App";

function Forecast() {
  const { data, dayDescription, selectedDay } = useContext(weatherContext);

  if (!data) {
    return <></>;
  }

  const forecastElementData = [
    "nacht",
    "ochtend",
    "voormiddag",
    "namiddag",
    "avond",
  ];

  return (
    <div className="container">
      <p>
        De verwachting voor {dayDescription[selectedDay]} in{" "}
        {data.location.name}
      </p>
      <div className="predictionCellContainer">
        {forecastElementData.map((part, index) => (
          <ForecastElement key={index} className="element" partOfDay={part} />
        ))}
      </div>
    </div>
  );
}

export default Forecast;

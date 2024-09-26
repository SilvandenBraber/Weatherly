import React, { useContext } from "react";
import "./forecast-element.css";
import { weatherContext } from "../../../App";

function ForecastElement({ className, partOfDay }) {
  const { data, selectedDay } = useContext(weatherContext);

  if (!data) {
    return <></>;
  }

  const { hour } = data.forecast.forecastday[selectedDay];

  // Map parts of the day to hourly data slices
  const partOfDayMap = {
    nacht: hour.slice(0, 5),
    ochtend: hour.slice(5, 10),
    voormiddag: hour.slice(10, 14),
    namiddag: hour.slice(14, 18),
    avond: hour.slice(18),
  };

  //   Selects an array with the corresponding name from the partOfDayMap
  const selectedPartOfDay = partOfDayMap[partOfDay] || [];

  //   Takes the data for the selected part of the day (first element of the array)
  const partOfDayData = selectedPartOfDay[0];

  return (
    <>
      <div className={`predictionCell ${className}`}>
        <p className="title">{partOfDay}</p>

        {/* Displays the temperature */}
        <p>{partOfDayData.temp_c}°</p>

        {/* Displays weather icon */}
        <img
          src={partOfDayData.condition.icon}
          className="img"
          alt="Weather Icon"
        />

        {/* Displays the chance of rain or snow */}
        {partOfDayData.chance_of_rain >= partOfDayData.chance_of_snow ? (
          <p className="chanceOf">
            {partOfDayData.chance_of_rain}%<br />
            Kans op
            <br />
            regen
          </p>
        ) : (
          <p className="chanceOf">
            {partOfDayData.chance_of_snow}%<br />
            Kans op
            <br />
            sneeuw
          </p>
        )}
      </div>
    </>
  );
}

export default ForecastElement;

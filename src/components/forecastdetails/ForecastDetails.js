import "./forecast-details.css";
import React, { useContext, useState } from "react";
import { weatherContext } from "../../App";
import ForecastDetailElement from "./forecastdetailelement/ForecastDetailElement";
import arrowDown from "../../images/arrowDown.svg";
import arrowUp from "../../images/arrowUp.svg";

function ForecastDetails() {
  const [isModalVisible, setModalVisible] = useState(true);

  const { data, selectedDay, dayDescription } = useContext(weatherContext);

  if (!data) {
    return <></>;
  }

  const { current, location, forecast } = data;
  const { pressure_mb } = current;
  const { name, region } = location;
  const {
    maxtemp_c,
    mintemp_c,
    daily_chance_of_rain,
    daily_chance_of_snow,
    avghumidity,
    avgvis_km,
    maxwind_kph,
    uv,
  } = forecast.forecastday[selectedDay].day;
  const { moon_phase } = forecast.forecastday[selectedDay].astro;

  const currentHour = new Date().getHours();
  const { dewpoint_c } = forecast.forecastday[selectedDay].hour[currentHour];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const detailElementsData = [
    {
      title: "Hoogste/Laagste",
      icon: "thermometer",
      details: `${maxtemp_c}°/${mintemp_c}°`,
    },
    {
      title: "Kans op regen",
      icon: "rainOvercast",
      details: `${daily_chance_of_rain}%`,
    },
    {
      title: "Kans op sneeuw",
      icon: "snowOvercast",
      details: `${daily_chance_of_snow}%`,
    },
    {
      title: "Vochtigheid",
      icon: "droplet",
      details: `${avghumidity}%`,
    },
    {
      title: "Druk",
      icon: "druk",
      details: `${pressure_mb} mb`,
    },
    {
      title: "Zicht",
      icon: "eye",
      details: `${avgvis_km} km`,
    },
    {
      title: "Wind",
      icon: "wind",
      details: `${maxwind_kph} km/h`,
    },
    {
      title: "Dauwpunt",
      icon: "droplet-graden",
      details: `${dewpoint_c}°`,
    },
    {
      title: "UV-Index",
      icon: "sun",
      details: `${uv} van 10`,
    },
    {
      title: "Maanfase",
      icon: "moon",
      details: `${moon_phase}`,
    },
  ];

  return (
    <div
      className={isModalVisible ? "mainContainer" : "containerModalInvisible"}
    >
      <p>
        Het weer voor {dayDescription[selectedDay]} in {name}, {region}
      </p>
      <button className="modalArrowButton" onClick={toggleModal}>
        <img
          className="modalArrow"
          src={isModalVisible ? arrowUp : arrowDown}
          alt="arrow"
        />
      </button>
      {isModalVisible && (
        <div className="parentDetailsContainer">
          <div className="detailsContainer">
            {detailElementsData.map(
              (data, index) =>
                index < 5 && (
                  <ForecastDetailElement
                    title={data.title}
                    icon={data.icon}
                    details={data.details}
                  />
                )
            )}
          </div>
          <div className="detailsContainer">
            {detailElementsData.map(
              (data, index) =>
                index >= 5 && (
                  <ForecastDetailElement
                    title={data.title}
                    icon={data.icon}
                    details={data.details}
                  />
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ForecastDetails;

import "./App.css";
import logo from "./images/logo.svg";
import SearchBar from "./components/searchbar/SearchBar";
import Tab from "./components/tab/Tab";
import ForecastDetails from "./components/forecastdetails/ForecastDetails";
import { createContext, useState } from "react";
import Forecast from "./components/forecast/Forecast";
import Weatherdisplay from "./components/weatherdisplay/WeatherDisplay";
import useFetch from "./hooks/useFetch";

export const weatherContext = createContext();

function App() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  const dayDescription = ["vandaag", "morgen", "overmorgen"];

  const defaultCity = "Malaga";

  const data = useFetch(searchInput || defaultCity);

  return (
    <weatherContext.Provider
      value={{
        data,
        dayDescription,
        searchInput,
        setSearchInput,
        selectedDay,
        setSelectedDay,
      }}
    >
      <div className="app">
        <header className="header">
          <div className="logoContainer">
            <img src={logo} alt="weatherly logo" className="logo"></img>
          </div>
          <SearchBar className="searchbar" />
        </header>
        <div className="tabContainer">
          {dayDescription.map((dayName, index) => (
            <Tab index={index} title={dayName} />
          ))}
        </div>
        <div className="main">
          <div className="mainLeftPart">
            <Weatherdisplay />
            <Forecast />
          </div>
          <div className="mainRightPart">
            <ForecastDetails />
          </div>
        </div>
      </div>
    </weatherContext.Provider>
  );
}

export default App;

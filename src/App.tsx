import React, { memo } from "react";
import "./App.css";
import WeatherBackground from "./components/WeatherBackground/WeatherBackground";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
import { useGetCitiesListData } from "./hooks/useGetCitiesListData";
import { useGetWeatherForecast } from "./hooks/useGetWeatherForecast";

const App: React.FC = (): JSX.Element => {
  const { citiesListData, setSearchValue } = useGetCitiesListData();
  const {
    activeMode,
    currentCityData,
    weatherForecast,
    setActiveMode,
    setCurrentCityData,
    setWeatherForecast,
  } = useGetWeatherForecast();

  return (
    <div className="App">
      <WeatherBackground />
      <WeatherForecast
        activeMode={activeMode}
        citiesListData={citiesListData}
        currentCityData={currentCityData}
        weatherForecast={weatherForecast}
        setSearchValue={setSearchValue}
        setActiveMode={setActiveMode}
        setCurrentCityData={setCurrentCityData}
        setWeatherForecast={setWeatherForecast}
      />
    </div>
  );
};

export default memo(App);

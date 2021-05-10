import React, { memo } from "react";
import "./App.css";
import WeatherBackground from "./components/WeatherBackground/WeatherBackground";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
import { useGetCitiesListData } from "./hooks/useGetCitiesListData";
import { useGetWeatherForecast } from "./hooks/useGetWeatherForecast";

const App: React.FC = (): JSX.Element => {
  const {
    filterValue,
    citiesListData,
    setSearchValue,
    setFilterValue,
    setCityIdValue,
  } = useGetCitiesListData();
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
      <WeatherBackground currentCityData={currentCityData!} />
      <WeatherForecast
        activeMode={activeMode}
        filterValue={filterValue}
        citiesListData={citiesListData!}
        currentCityData={currentCityData!}
        weatherForecast={weatherForecast!}
        setActiveMode={setActiveMode}
        setSearchValue={setSearchValue}
        setFilterValue={setFilterValue}
        setCityIdValue={setCityIdValue}
        setCurrentCityData={setCurrentCityData}
        setWeatherForecast={setWeatherForecast}
      />
    </div>
  );
};

export default memo(App);

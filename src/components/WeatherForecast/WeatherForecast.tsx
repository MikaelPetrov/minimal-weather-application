import classNames from "classnames";
import { memo } from "react";
import { TypeTempListData, TypeWeatherForecast } from "../../hooks/types";
import CitiesList from "./CitiesList/CitiesList";
import Forecast from "./Forecast/Forecast";
import styles from "./WeatherForecast.module.scss";

type Props = {
  activeMode: boolean;
  citiesListData: TypeTempListData[];
  currentCityData: TypeTempListData;
  weatherForecast: TypeWeatherForecast;
  setActiveMode: (activeMode: boolean) => void;
  setSearchValue: (searchValue: string) => void;
  setCurrentCityData: (currentCityData: any) => void;
  setWeatherForecast: (weatherForecast: any) => void;
};

const WeatherForecast: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className={classNames(styles["body"], { [styles["body_activated"]]: props.activeMode })}>
      {!props.activeMode ? (
        <CitiesList
          activeMode={props.activeMode}
          citiesListData={props.citiesListData}
          setSearchValue={props.setSearchValue}
          setCurrentCityData={props.setCurrentCityData}
          setActiveMode={props.setActiveMode}
        />
      ) : (
        <Forecast
          currentCityData={props.currentCityData}
          weatherForecast={props.weatherForecast}
          setActiveMode={props.setActiveMode}
          setCurrentCityData={props.setCurrentCityData}
          setWeatherForecast={props.setWeatherForecast}
        />
      )}
    </div>
  );
};

export default memo(WeatherForecast);

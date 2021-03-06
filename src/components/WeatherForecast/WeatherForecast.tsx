import classNames from "classnames";
import { memo } from "react";
import {
  TypeGroupListData,
  TypeTempListData,
  TypeWeatherForecast,
} from "../../hooks/types";
import CitiesList from "./CitiesList/CitiesList";
import Forecast from "./Forecast/Forecast";
import styles from "./WeatherForecast.module.scss";

type Props = {
  activeMode: boolean;
  filterValue: string;
  citiesListData: TypeGroupListData;
  currentCityData: TypeTempListData;
  weatherForecast: TypeWeatherForecast;
  setActiveMode: (activeMode: boolean) => void;
  setSearchValue: (searchValue: string) => void;
  setFilterValue: (filterValue: string) => void;
  setCityIdValue: (cityIdValue: number) => void;
  setCurrentCityData: (currentCityData: TypeTempListData) => void;
  setWeatherForecast: (weatherForecast: TypeWeatherForecast) => void;
};

const WeatherForecast: React.FC<Props> = (props): JSX.Element => {
  return (
    <div
      className={classNames(styles["body"], {
        [styles["body_activated"]]:
          props.activeMode && props.currentCityData.id,
      })}
    >
      {!props.activeMode ? (
        <CitiesList
          filterValue={props.filterValue}
          citiesListData={props.citiesListData}
          currentCityData={props.currentCityData}
          setActiveMode={props.setActiveMode}
          setSearchValue={props.setSearchValue}
          setFilterValue={props.setFilterValue}
          setCityIdValue={props.setCityIdValue}
          setCurrentCityData={props.setCurrentCityData}
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

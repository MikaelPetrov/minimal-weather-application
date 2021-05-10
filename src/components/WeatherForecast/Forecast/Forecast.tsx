import classNames from "classnames";
import { memo } from "react";
import {
  TypeDaily,
  TypeTempListData,
  TypeWeatherForecast,
} from "../../../hooks/types";
import { dayIcon, modalLocationIcon, nightIcon } from "../../../icons";
import Icon from "../../../uiKit/Icon";
import {
  dailyIcons,
  DAILY_TEMP_DIFF,
  DAYTIME,
  HUMIDITY,
  MAIN_TEMP_DIFF,
  PRESSURE,
  SUNRISE,
  SUNSET,
  vectorIcons,
  weatherParams,
  WIND_SPEED,
} from "./constants";
import styles from "./Forecast.module.scss";

type Props = {
  currentCityData: TypeTempListData;
  weatherForecast: TypeWeatherForecast;
  setActiveMode: (activeMode: boolean) => void;
  setCurrentCityData: (currentCityData: TypeTempListData) => void;
  setWeatherForecast: (weatherForecast: TypeWeatherForecast) => void;
};

const Forecast: React.FC<Props> = (props): JSX.Element => {
  const onSetCitiesList = () => {
    props.setActiveMode(false);
    props.setCurrentCityData({
      id: props.currentCityData.id,
      name: props.currentCityData.name,
      country: props.currentCityData.country,
      coord: null,
      temp: props.currentCityData.temp,
      dt: props.currentCityData.dt,
      sunrise: props.currentCityData.sunrise,
      sunset: props.currentCityData.sunset,
    });
  };

  const onSetWeatherForecast = (obj: TypeDaily | TypeWeatherForecast) => {
    props.setWeatherForecast({
      dt: obj.dt,
      weather: obj.weather,
      temp: obj.temp,
      humidity: obj.humidity,
      pressure: obj.pressure,
      wind_speed: obj.wind_speed,
      sunrise: obj.sunrise,
      sunset: obj.sunset,
      daytime: obj.daytime,
      daily: props.weatherForecast.daily,
    });
  };

  const getWeatherParameters = (type: string) => {
    switch (type) {
      case HUMIDITY:
        return props.weatherForecast?.humidity;
      case PRESSURE:
        return props.weatherForecast?.pressure;
      case WIND_SPEED:
        return props.weatherForecast?.wind_speed;
      case SUNRISE:
        return props.weatherForecast?.sunrise;
      case SUNSET:
        return props.weatherForecast?.sunset;
      case DAYTIME:
        return props.weatherForecast?.daytime;
      default:
        return type;
    }
  };

  const getTempDifference = (
    obj: TypeDaily | TypeWeatherForecast,
    type: string
  ): JSX.Element => (
    <>
      {Object.values(obj.temp).map((item, itemIndex) => (
        <div
          key={itemIndex}
          className={classNames(
            { [styles["temp-diff"]]: type === MAIN_TEMP_DIFF },
            { [styles["day-temp"]]: type === DAILY_TEMP_DIFF }
          )}
        >
          {vectorIcons.map((elem) => (
            <div
              key={elem.type}
              className={classNames(
                { [styles["temp-diff__align"]]: type === MAIN_TEMP_DIFF },
                { [styles["day-temp__align"]]: type === DAILY_TEMP_DIFF }
              )}
            >
              {itemIndex === elem.indexValue && (
                <>
                  <div
                    className={classNames(
                      { [styles["temp-diff__value"]]: type === MAIN_TEMP_DIFF },
                      { [styles["day-temp__value"]]: type === DAILY_TEMP_DIFF }
                    )}
                  >
                    {item}°C
                  </div>
                  <div
                    className={classNames(
                      { [styles["temp-diff__icon"]]: type === MAIN_TEMP_DIFF },
                      { [styles["day-temp__icon"]]: type === DAILY_TEMP_DIFF }
                    )}
                  >
                    {itemIndex === elem.indexValue && (
                      <Icon
                        path={elem.iconName.path}
                        viewBox={elem.iconName.viewBox}
                        title="VectorIcon"
                      />
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );

  return (
    <>
      <div className={styles["modal"]}>
        <div className={styles["modal__city"]}>
          <div className={styles["modal__name"]} onClick={onSetCitiesList}>
            {props.currentCityData.name + ", " + props.currentCityData.country}
          </div>
          <Icon
            className={styles["modal__location-icon"]}
            path={modalLocationIcon.path}
            viewBox={modalLocationIcon.viewBox}
            title="ModalLocationIcon"
          />
        </div>
      </div>
      <div className={styles["modal__date"]}>{props.weatherForecast?.dt}</div>
      <div className={styles["main"]}>
        <div className={styles["status"]}>
          <div className={styles["status__icon"]}>
            {props.currentCityData?.dt > props.currentCityData?.sunrise &&
            props.currentCityData?.dt < props.currentCityData?.sunset ? (
              <Icon
                path={dayIcon.path}
                viewBox={dayIcon.viewBox}
                title="DayIcon"
              />
            ) : (
              <Icon
                path={nightIcon.path}
                viewBox={nightIcon.viewBox}
                title="NightIcon"
              />
            )}
          </div>
          <div className={styles["status__text"]}>
            {props.weatherForecast?.weather[0].main}
          </div>
        </div>
        <div className={styles["temp"]}>
          <div className={styles["temp__value"]}>
            {props.weatherForecast?.temp.day}
          </div>
          <div className={styles["temp__unit"]}>°C</div>
        </div>
        <div className={styles["temp-align"]}>
          {props.weatherForecast?.temp &&
            getTempDifference(props.weatherForecast, MAIN_TEMP_DIFF)}
        </div>
      </div>
      <div className={styles["weather"]}>
        {weatherParams.map((row, rowIndex) => (
          <div key={rowIndex} className={styles["weather__row"]}>
            {row.map((par) => (
              <div key={par.type} className={styles["parameter"]}>
                <div className={styles["parameter__icon"]}>
                  <Icon
                    path={par.iconName.path}
                    viewBox={par.iconName.viewBox}
                    title="ParameterIcon"
                  />
                </div>
                <div className={styles["parameter__value"]}>
                  {getWeatherParameters(par.valueName)}
                  {par.unit}
                </div>
                <div className={styles["parameter__text"]}>{par.fieldName}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles["forecast"]}>
        {props.weatherForecast?.daily?.map((obj) => (
          <div
            key={obj.dt}
            className={styles["daily"]}
            onClick={() => onSetWeatherForecast(obj)}
          >
            <div className={styles["daily__icon"]}>
              {dailyIcons.map((elem) => (
                <div key={elem.type}>
                  {obj.weather[0].main === elem.weatherName && (
                    <Icon
                      path={elem.iconName.path}
                      viewBox={elem.iconName.viewBox}
                      title="WeatherIcon"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className={styles["daily__time"]}>{obj.dt}</div>
            <div className={styles["daily__temp"]}>
              {getTempDifference(obj, DAILY_TEMP_DIFF)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(Forecast);

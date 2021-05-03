import { memo } from "react";
import { TypeDaily, TypeTempListData, TypeWeatherForecast } from "../../../hooks/types";
import {
  arrowDownIcon,
  arrowUpIcon,
  dayIcon,
  modalLocationIcon,
  nightIcon,
  vectorDownIcon,
  vectorUpIcon,
} from "../../../icons";
import Icon from "../../../uiKit/Icon";
import { dailyIcons, DAYTIME, HUMIDITY, PRESSURE, SUNRISE, SUNSET, weatherParams, WIND_SPEED } from "./constants";
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

  const onSetWeatherForecast = (obj: TypeDaily) => {
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

  const mainTempDifference = (): JSX.Element => (
    <>
      {
        // eslint-disable-next-line
        Object.values(props.weatherForecast.temp).map((item, itemIndex) => {
          if (itemIndex > 0) {
            return (
              <div key={itemIndex} className={styles["temp-diff"]}>
                <div className={styles["temp-diff__value"]}>{item}°C</div>
                <div className={styles["temp-diff__icon"]}>
                  {itemIndex === 1 && <Icon path={arrowUpIcon.path} viewBox={arrowUpIcon.viewBox} title="ArrowUp" />}
                  {itemIndex === 2 && (
                    <Icon path={arrowDownIcon.path} viewBox={arrowDownIcon.viewBox} title="ArrowDown" />
                  )}
                </div>
              </div>
            );
          }
        })
      }
    </>
  );

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
              <Icon path={dayIcon.path} viewBox={dayIcon.viewBox} title="DayIcon" />
            ) : (
              <Icon path={nightIcon.path} viewBox={nightIcon.viewBox} title="NightIcon" />
            )}
          </div>
          <div className={styles["status__text"]}>{props.weatherForecast?.weather[0].main}</div>
        </div>
        <div className={styles["temp"]}>
          <div className={styles["temp__value"]}>{props.weatherForecast?.temp.day}</div>
          <div className={styles["temp__unit"]}>°C</div>
        </div>
        <div className={styles["temp-align"]}>{props.weatherForecast?.temp && mainTempDifference()}</div>
      </div>
      <div className={styles["weather"]}>
        {weatherParams.map((row, rowIndex) => (
          <div key={rowIndex} className={styles["weather__row"]}>
            {row.map((par, parIndex) => (
              <div key={parIndex} className={styles["parameter"]}>
                <div className={styles["parameter__icon"]}>
                  <Icon path={par.iconName.path} viewBox={par.iconName.viewBox} title="ParameterIcon" />
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
        {props.weatherForecast?.daily?.map((obj, objIndex) => (
          <div key={objIndex} className={styles["daily"]} onClick={() => onSetWeatherForecast(obj)}>
            <div className={styles["daily__icon"]}>
              {dailyIcons.map((item, index) => (
                <div key={index}>
                  {obj.weather[0].main === item.weatherName && (
                    <Icon path={item.iconName.path} viewBox={item.iconName.viewBox} title="WeatherIcon" />
                  )}
                </div>
              ))}
            </div>
            <div className={styles["daily__time"]}>{obj.dt}</div>
            <div className={styles["daily__temp"]}>
              {/* eslint-disable-next-line */}
              {Object.values(obj.temp).map((item, itemIndex) => {
                if (itemIndex > 0) {
                  return (
                    <div key={itemIndex} className={styles["day-temp"]}>
                      <div className={styles["day-temp__value"]}>{item}</div>
                      <div className={styles["day-temp__icon"]}>
                        {itemIndex === 1 && (
                          <Icon path={vectorUpIcon.path} viewBox={vectorUpIcon.viewBox} title="VectorIcon" />
                        )}
                        {itemIndex === 2 && (
                          <Icon path={vectorDownIcon.path} viewBox={vectorDownIcon.viewBox} title="VectorIcon" />
                        )}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(Forecast);

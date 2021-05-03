import { memo } from "react";
import { TypeTempListData, TypeWeatherForecast } from "../../../hooks/types";
import {
  arrowDownIcon,
  arrowUpIcon,
  cloudyIcon,
  dayIcon,
  hazyIcon,
  modalLocationIcon,
  rainyIcon,
  snowyIcon,
  sunnyIcon,
  vectorDownIcon,
  vectorUpIcon,
} from "../../../icons";
import Icon from "../../../uiKit/Icon";
import { weatherParams } from "./constants";
import styles from "./Forecast.module.scss";

type Props = {
  currentCityData: TypeTempListData;
  weatherForecast: TypeWeatherForecast;
  setActiveMode: (activeMode: boolean) => void;
  setCurrentCityData: (currentCityData: TypeTempListData) => void;
  setWeatherForecast: (weatherForecast: {}) => void;
};

const Forecast: React.FC<Props> = (props): JSX.Element => {
  return (
    <>
      <div className={styles["modal"]}>
        <div className={styles["modal__city"]}>
          <div
            className={styles["modal__name"]}
            onClick={() => {
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
            }}
          >
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
            <Icon path={dayIcon.path} viewBox={dayIcon.viewBox} title="DayIcon" />
          </div>
          <div className={styles["status__text"]}>{props.weatherForecast?.weather}</div>
        </div>
        <div className={styles["temp"]}>
          <div className={styles["temp__value"]}>{props.weatherForecast?.temp.day}</div>
          <div className={styles["temp__unit"]}>°C</div>
        </div>
        <div className={styles["temp-align"]}>
          {/* eslint-disable-next-line */}
          {Object.values(props.weatherForecast.temp).map((item, itemIndex) => {
            if (itemIndex > 0) {
              return (
                <div className={styles["temp-diff"]}>
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
          })}
        </div>
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
                  {par.valueName === "humidity" && props.weatherForecast?.humidity}
                  {par.valueName === "pressure" && props.weatherForecast?.pressure}
                  {par.valueName === "wind_speed" && props.weatherForecast?.wind_speed}
                  {par.valueName === "sunrise" && props.weatherForecast?.sunrise}
                  {par.valueName === "sunset" && props.weatherForecast?.sunset}
                  {par.valueName === "daytime" && props.weatherForecast?.daytime}
                  {par.unit}
                </div>
                <div className={styles["parameter__text"]}>{par.fieldName}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles["forecast"]}>
        {/* eslint-disable-next-line */}
        {props.weatherForecast?.daily?.map((obj, objIndex) => {
          if (objIndex < 3) {
            return (
              <div key={objIndex} className={styles["daily"]} onClick={() => props.setWeatherForecast(obj)}>
                <div className={styles["daily__icon"]}>
                  {obj.weather === "Clear" && (
                    <Icon path={sunnyIcon.path} viewBox={sunnyIcon.viewBox} title="WeatherIcon" />
                  )}
                  {obj.weather === "Clouds" && (
                    <Icon path={cloudyIcon.path} viewBox={cloudyIcon.viewBox} title="WeatherIcon" />
                  )}
                  {obj.weather === "Hazy" && (
                    <Icon path={hazyIcon.path} viewBox={hazyIcon.viewBox} title="WeatherIcon" />
                  )}
                  {obj.weather === "Rain" && (
                    <Icon path={rainyIcon.path} viewBox={rainyIcon.viewBox} title="WeatherIcon" />
                  )}
                  {obj.weather === "Snow" && (
                    <Icon path={snowyIcon.path} viewBox={snowyIcon.viewBox} title="WeatherIcon" />
                  )}
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
            );
          }
        })}
      </div>
    </>
  );
};

export default memo(Forecast);

import { memo } from "react";
import { arrowDownIcon, arrowUpIcon, dayIcon, modalLocationIcon } from "../../../icons";
import Icon from "../../../uiKit/Icon";
import { TypeWeatherForecast } from "../types";
import { weatherParams } from "./constants";
import styles from "./Forecast.module.scss";

type Props = {
  currentCityData: any;
  weatherForecast: TypeWeatherForecast;
  setActiveMode: any;
  setCurrentCityData: any;
  setWeatherForecast: any;
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
              props.setCurrentCityData({});
              props.setWeatherForecast({});
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
      <div className={styles["modal__date"]}>{props.weatherForecast.dt_utc}</div>
      <div className={styles["main"]}>
        <div className={styles["status"]}>
          <div className={styles["status__icon"]}>
            <Icon path={dayIcon.path} viewBox={dayIcon.viewBox} title="DayIcon" />
          </div>
          <div className={styles["status__text"]}>{props.weatherForecast.weather}</div>
        </div>
        <div className={styles["temp"]}>
          <div className={styles["temp__value"]}>{props.weatherForecast.temp}</div>
          <div className={styles["temp__unit"]}>°C</div>
        </div>
        <div className={styles["temp-diff"]}>
          <div className={styles["temp-max"]}>
            <div className={styles["temp-max__value"]}>N/A°C</div>
            <div className={styles["temp-max__icon"]}>
              <Icon path={arrowUpIcon.path} viewBox={arrowUpIcon.viewBox} title="ArrowUp" />
            </div>
          </div>
          <div className={styles["temp-min"]}>
            <div className={styles["temp-min__value"]}>N/A°C</div>
            <div className={styles["temp-min__icon"]}>
              <Icon path={arrowDownIcon.path} viewBox={arrowDownIcon.viewBox} title="ArrowDown" />
            </div>
          </div>
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
                  {par.valueName === "humidity" && props.weatherForecast.humidity}
                  {par.valueName === "pressure" && props.weatherForecast.pressure}
                  {par.valueName === "wind_speed" && props.weatherForecast.wind_speed}
                  {par.valueName === "sunrise" && props.weatherForecast.sunrise}
                  {par.valueName === "sunset" && props.weatherForecast.sunset}
                  {par.valueName === "daytime" && props.weatherForecast.daytime}
                  {par.unit}
                </div>
                <div className={styles["parameter__text"]}>{par.fieldName}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles["forecast"]}>
        <div className={styles["daily"]}>
          <div className={styles["daily__icon"]}>icon</div>
          <div className={styles["daily__time"]}>mon, 21</div>
          <div className={styles["daily__temp"]}>
            <div className={styles["daily-temp-max"]}>
              <div className={styles["daily-temp-max__value"]}>35C</div>
              <div className={styles["daily-temp-max__icon"]}></div>
            </div>
            <div className={styles["daily-temp-min"]}>
              <div className={styles["daily-temp-min__value"]}>26C</div>
              <div className={styles["daily-temp-min__icon"]}></div>
            </div>
          </div>
        </div>
        <div className={styles["daily"]}>
          <div className={styles["daily__icon"]}>icon</div>
          <div className={styles["daily__time"]}>mon, 21</div>
          <div className={styles["daily__temp"]}>
            <div className={styles["daily-temp-max"]}>
              <div className={styles["daily-temp-max__value"]}>35C</div>
              <div className={styles["daily-temp-max__icon"]}></div>
            </div>
            <div className={styles["daily-temp-min"]}>
              <div className={styles["daily-temp-min__value"]}>26C</div>
              <div className={styles["daily-temp-min__icon"]}></div>
            </div>
          </div>
        </div>
        <div className={styles["daily"]}>
          <div className={styles["daily__icon"]}>icon</div>
          <div className={styles["daily__time"]}>mon, 21</div>
          <div className={styles["daily__temp"]}>
            <div className={styles["daily-temp-max"]}>
              <div className={styles["daily-temp-max__value"]}>35C</div>
              <div className={styles["daily-temp-max__icon"]}></div>
            </div>
            <div className={styles["daily-temp-min"]}>
              <div className={styles["daily-temp-min__value"]}>26C</div>
              <div className={styles["daily-temp-min__icon"]}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Forecast);

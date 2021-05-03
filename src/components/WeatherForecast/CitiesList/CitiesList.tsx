import classNames from "classnames";
import { memo } from "react";
import { TypeGroupListData, TypeTempListData } from "../../../hooks/types";
import styles from "./CitiesList.module.scss";
import SearchBar from "./SearchBar";

type Props = {
  activeMode: boolean;
  citiesListData: TypeGroupListData;
  currentCityData: TypeTempListData;
  setActiveMode: (activeMode: boolean) => void;
  setSearchValue: (searchValue: string) => void;
  setCurrentCityData: (currentCityData: TypeTempListData) => void;
};

const CitiesList: React.FC<Props> = (props): JSX.Element => {
  const onSetCityData = (city: TypeTempListData) => {
    props.setActiveMode(true);
    props.setCurrentCityData(city);
  };

  return (
    <>
      <div className={styles["header"]}>Location</div>
      <div className={styles["field"]}>
        <SearchBar setSearchValue={props.setSearchValue} />
      </div>
      <div className={styles["list-box"]}>
        {props.citiesListData &&
          Object.values(props.citiesListData).map((cities, citiesIndex) => (
            <div key={citiesIndex} className={styles["cities"]}>
              <div className={styles["cities__group"]}>{cities.group}</div>
              {cities.cities.map((city, cityIndex) => (
                <div
                  key={cityIndex}
                  className={classNames(styles["city"], {
                    [styles["city_active"]]: props.currentCityData?.id === city.id,
                  })}
                >
                  <div
                    className={classNames(styles["city__name"], {
                      [styles["city__name_active"]]: props.currentCityData?.id === city.id,
                    })}
                    onClick={() => onSetCityData(city)}
                  >
                    {city.name + ", " + city.country}
                  </div>
                  <div className={styles["city__temp"]}>{city.temp + "°C"}</div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default memo(CitiesList);

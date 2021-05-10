import classNames from "classnames";
import { memo } from "react";
import { TypeGroupListData, TypeTempListData } from "../../../hooks/types";
import styles from "./CitiesList.module.scss";
import SearchBar from "./SearchBar";

type Props = {
  filterValue: string;
  citiesListData: TypeGroupListData;
  currentCityData: TypeTempListData;
  setActiveMode: (activeMode: boolean) => void;
  setSearchValue: (searchValue: string) => void;
  setFilterValue: (filterValue: string) => void;
  setCityIdValue: (cityIdValue: number) => void;
  setCurrentCityData: (currentCityData: TypeTempListData) => void;
};

const CitiesList: React.FC<Props> = (props): JSX.Element => {
  const onSetCityData = (city: TypeTempListData) => {
    props.setActiveMode(true);
    props.setCurrentCityData(city);
  };

  const onSetDeleteCityData = (city: TypeTempListData) => {
    props.setCityIdValue(city.id!);
    if (props.currentCityData?.id === city.id) {
      props.setCurrentCityData({
        id: null,
        name: "",
        country: "",
        coord: null,
        temp: null,
        dt: 0,
        sunrise: 0,
        sunset: 0,
      });
    }
  };

  return (
    <>
      <div className={styles["header"]}>Location</div>
      <div className={styles["field"]}>
        <SearchBar
          filterValue={props.filterValue}
          setSearchValue={props.setSearchValue}
          setFilterValue={props.setFilterValue}
        />
      </div>
      <div className={styles["list-box"]}>
        {props.citiesListData &&
          Object.values(props.citiesListData).map((cities) => (
            <div key={cities.group} className={styles["cities"]}>
              <div className={styles["cities__group"]}>{cities.group}</div>
              {cities.cities.map((city) => (
                <div
                  key={city.id}
                  className={classNames(styles["city"], {
                    [styles["city_active"]]:
                      props.currentCityData?.id === city.id,
                  })}
                >
                  <div
                    className={classNames(styles["city__name"], {
                      [styles["city__name_active"]]:
                        props.currentCityData?.id === city.id,
                    })}
                    onClick={() => onSetCityData(city)}
                  >
                    {city.name + ", " + city.country}
                  </div>
                  <div className={styles["city__temp"]}>
                    {city.temp}°C
                    <div
                      className={styles["city__cross"]}
                      onClick={() => onSetDeleteCityData(city)}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default memo(CitiesList);

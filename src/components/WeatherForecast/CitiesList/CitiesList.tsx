import { memo } from "react";
import { TypeTempListData } from "../../../hooks/types";
import styles from "./CitiesList.module.scss";
import SearchBar from "./SearchBar";

type Props = {
  activeMode: boolean;
  citiesListData: TypeTempListData[];
  setActiveMode: (activeMode: boolean) => void;
  setSearchValue: (searchValue: string) => void;
  setCurrentCityData: (currentCityData: any) => void;
};

const CitiesList: React.FC<Props> = (props): JSX.Element => {
  return (
    <>
      <div className={styles["header"]}>Location</div>
      <div className={styles["field"]}>
        <SearchBar setSearchValue={props.setSearchValue} />
      </div>
      {Object.values(props.citiesListData).map((cities: any, index: any) => {
        return (
          <div key={index} className={styles["cities"]}>
            <div className={styles["cities__group"]}>{cities.group}</div>
            {cities.cities.map((city: any, index: any) => {
              return (
                <div key={index} className={styles["city"]}>
                  <div
                    className={styles["city__name"]}
                    onClick={() => {
                      props.setActiveMode(true);
                      props.setCurrentCityData(city);
                    }}
                  >
                    {city.name + ", " + city.country}
                  </div>
                  <div className={styles["city__temp"]}>{city.temp + "°C"}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default memo(CitiesList);

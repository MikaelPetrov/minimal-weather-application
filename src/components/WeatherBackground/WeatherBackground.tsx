import { memo } from "react";
import backgroundDayImage from "../../assets/backgroundImages/backgroundDayImage.png";
import backgroundNightImage from "../../assets/backgroundImages/backgroundNightImage.png";
import { TypeTempListData } from "../../hooks/types";
import styles from "./WeatherBackground.module.scss";

type Props = {
  currentCityData: TypeTempListData;
};

const WeatherBackground: React.FC<Props> = (props): JSX.Element => {
  return (
    <>
      {props.currentCityData?.dt > props.currentCityData?.sunrise &&
      props.currentCityData?.dt < props.currentCityData?.sunset ? (
        <img
          className={styles["background"]}
          src={backgroundDayImage}
          alt="day"
        />
      ) : (
        <img
          className={styles["background"]}
          src={backgroundNightImage}
          alt="night"
        />
      )}
    </>
  );
};

export default memo(WeatherBackground);

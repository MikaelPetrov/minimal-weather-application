import { memo } from "react";
import backgroundDayImage from "../../assets/backgroundImages/backgroundDayImage.png";
import styles from "./WeatherBackground.module.scss";

type Props = {};

const WeatherBackground: React.FC<Props> = (props): JSX.Element => {
  return <img className={styles["background"]} src={backgroundDayImage} alt="day" />;
};

export default memo(WeatherBackground);

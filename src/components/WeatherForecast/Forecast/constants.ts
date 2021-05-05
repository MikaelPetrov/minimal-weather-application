import {
  cloudyIcon,
  daytimeIcon,
  hazyIcon,
  humidityIcon,
  pressureIcon,
  rainyIcon,
  snowyIcon,
  sunnyIcon,
  sunriseIcon,
  sunsetIcon,
  vectorDownIcon,
  vectorUpIcon,
  windIcon,
} from "../../../icons";

export const HUMIDITY = "HUMIDITY";
export const PRESSURE = "PRESSURE";
export const WIND_SPEED = "WIND_SPEED";
export const SUNRISE = "SUNRISE";
export const SUNSET = "SUNSET";
export const DAYTIME = "DAYTIME";
export const MAIN_TEMP_DIFF = "MAIN_TEMP_DIFF";
export const DAILY_TEMP_DIFF = "DAILY_TEMP_DIFF";

export const weatherParams = [
  [
    {
      iconName: humidityIcon,
      valueName: HUMIDITY,
      fieldName: "Humidity",
      unit: " %",
    },
    {
      iconName: pressureIcon,
      valueName: PRESSURE,
      fieldName: "Pressure",
      unit: " mBar",
    },
    {
      iconName: windIcon,
      valueName: WIND_SPEED,
      fieldName: "Wind",
      unit: " km/h",
    },
  ],
  [
    {
      iconName: sunriseIcon,
      valueName: SUNRISE,
      fieldName: "Sunrise",
      unit: "",
    },
    {
      iconName: sunsetIcon,
      valueName: SUNSET,
      fieldName: "Sunset",
      unit: "",
    },
    {
      iconName: daytimeIcon,
      valueName: DAYTIME,
      fieldName: "Daytime",
      unit: "",
    },
  ],
];

export const dailyIcons = [
  {
    iconName: sunnyIcon,
    weatherName: "Clear",
  },
  {
    iconName: cloudyIcon,
    weatherName: "Clouds",
  },
  {
    iconName: hazyIcon,
    weatherName: "Hazy",
  },
  {
    iconName: rainyIcon,
    weatherName: "Rain",
  },
  {
    iconName: snowyIcon,
    weatherName: "Snow",
  },
];

export const vectorIcons = [
  {
    indexValue: 1,
    iconName: vectorUpIcon,
  },
  {
    indexValue: 2,
    iconName: vectorDownIcon,
  },
];

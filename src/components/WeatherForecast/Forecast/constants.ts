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
export const CLEAR = "CLEAR";
export const CLOUDS = "CLOUDS";
export const HAZY = "HAZY";
export const RAIN = "RAIN";
export const SNOW = "SNOW";
export const VECTOR_UP = "VECTOR_UP";
export const VECTOR_DOWN = "VECTOR_DOWN";

export const weatherParams = [
  [
    {
      type: HUMIDITY,
      iconName: humidityIcon,
      valueName: HUMIDITY,
      fieldName: "Humidity",
      unit: " %",
    },
    {
      type: PRESSURE,
      iconName: pressureIcon,
      valueName: PRESSURE,
      fieldName: "Pressure",
      unit: " mBar",
    },
    {
      type: WIND_SPEED,
      iconName: windIcon,
      valueName: WIND_SPEED,
      fieldName: "Wind",
      unit: " km/h",
    },
  ],
  [
    {
      type: SUNRISE,
      iconName: sunriseIcon,
      valueName: SUNRISE,
      fieldName: "Sunrise",
      unit: "",
    },
    {
      type: SUNSET,
      iconName: sunsetIcon,
      valueName: SUNSET,
      fieldName: "Sunset",
      unit: "",
    },
    {
      type: DAYTIME,
      iconName: daytimeIcon,
      valueName: DAYTIME,
      fieldName: "Daytime",
      unit: "",
    },
  ],
];

export const dailyIcons = [
  {
    type: CLEAR,
    iconName: sunnyIcon,
    weatherName: "Clear",
  },
  {
    type: CLOUDS,
    iconName: cloudyIcon,
    weatherName: "Clouds",
  },
  {
    type: HAZY,
    iconName: hazyIcon,
    weatherName: "Hazy",
  },
  {
    type: RAIN,
    iconName: rainyIcon,
    weatherName: "Rain",
  },
  {
    type: SNOW,
    iconName: snowyIcon,
    weatherName: "Snow",
  },
];

export const vectorIcons = [
  {
    type: VECTOR_UP,
    indexValue: 1,
    iconName: vectorUpIcon,
  },
  {
    type: VECTOR_DOWN,
    indexValue: 2,
    iconName: vectorDownIcon,
  },
];

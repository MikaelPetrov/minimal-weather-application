import { humidityIcon, pressureIcon, windIcon, sunriseIcon, sunsetIcon, daytimeIcon } from "../../../icons";

export const weatherParams = [
  [
    {
      iconName: humidityIcon,
      valueName: "humidity",
      fieldName: "Humidity",
      unit: " %",
    },
    {
      iconName: pressureIcon,
      valueName: "pressure",
      fieldName: "Pressure",
      unit: " mBar",
    },
    {
      iconName: windIcon,
      valueName: "wind_speed",
      fieldName: "Wind",
      unit: " km/h",
    },
  ],
  [
    {
      iconName: sunriseIcon,
      valueName: "sunrise",
      fieldName: "Sunrise",
      unit: "",
    },
    {
      iconName: sunsetIcon,
      valueName: "sunset",
      fieldName: "Sunset",
      unit: "",
    },
    {
      iconName: daytimeIcon,
      valueName: "daytime",
      fieldName: "Daytime",
      unit: "",
    },
  ],
];

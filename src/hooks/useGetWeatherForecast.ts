import { useEffect, useState } from "react";
import { instance } from "../api/api";
import { toFormatTime } from "../utils/helpers";
import { ABSOLUTE_ZERO } from "./constants";
import { TypeDaily, TypeTempListData, TypeWeatherForecast } from "./types";

export function useGetWeatherForecast() {
  const [activeMode, setActiveMode] = useState<boolean>(false);
  const [currentCityData, setCurrentCityData] = useState<TypeTempListData>();
  const [weatherForecast, setWeatherForecast] = useState<TypeWeatherForecast>();

  async function getWeatherForecast(currentCityData: TypeTempListData) {
    try {
      const response = await instance.get(
        `onecall?lat=${currentCityData.coord?.lat}&lon=${currentCityData.coord?.lon}&exclude=minutely,hourly,alerts`
      );
      const data = response.data;
      setWeatherForecast({
        dt: toFormatTime(
          new Date(1970, 0, 1, 0, 0, data.current.dt + data.timezone_offset, 0),
          "dddd, D MMMM YYYY | h:mmA"
        ),
        weather: data.current.weather,
        temp: {
          day: Math.round(data.current.temp - ABSOLUTE_ZERO),
          max: Math.round(data.daily[0].temp.max - ABSOLUTE_ZERO),
          min: Math.round(data.daily[0].temp.min - ABSOLUTE_ZERO),
        },
        humidity: data.current.humidity,
        pressure: (data.current.pressure / 1000).toFixed(3),
        wind_speed: (data.current.wind_speed * 1.60934).toFixed(1),
        sunrise: toFormatTime(new Date(1970, 0, 1, 0, 0, data.current.sunrise + data.timezone_offset, 0), "h:mm A"),
        sunset: toFormatTime(new Date(1970, 0, 1, 0, 0, data.current.sunset + data.timezone_offset, 0), "h:mm A"),
        daytime: toFormatTime(new Date(1970, 0, 1, 0, 0, data.current.sunset - data.current.sunrise, 0), "HH{b} mm{c}")
          .replace("{b}", "h")
          .replace("{c}", "m"),
        daily: data.daily.map((obj: TypeDaily) => {
          return {
            dt: toFormatTime(new Date(1970, 0, 1, 0, 0, +obj.dt + data.timezone_offset, 0), "dddd, D"),
            weather: obj.weather,
            temp: {
              day: Math.round(obj.temp.day! - ABSOLUTE_ZERO),
              max: Math.round(obj.temp.max! - ABSOLUTE_ZERO),
              min: Math.round(obj.temp.min! - ABSOLUTE_ZERO),
            },
            humidity: obj.humidity,
            pressure: (+obj.pressure / 1000).toFixed(3),
            wind_speed: (+obj.wind_speed * 1.60934).toFixed(1),
            sunrise: toFormatTime(new Date(1970, 0, 1, 0, 0, +obj.sunrise + data.timezone_offset, 0), "h:mm A"),
            sunset: toFormatTime(new Date(1970, 0, 1, 0, 0, +obj.sunset + data.timezone_offset, 0), "h:mm A"),
            daytime: toFormatTime(new Date(1970, 0, 1, 0, 0, +obj.sunset - +obj.sunrise, 0), "HH{b} mm{c}")
              .replace("{b}", "h")
              .replace("{c}", "m"),
          };
        }),
      });
      return {};
    } catch {
      console.error();
    }
  }

  useEffect(() => {
    if (currentCityData?.coord) {
      getWeatherForecast(currentCityData!);
    }
    // eslint-disable-next-line
  }, [currentCityData]);

  return {
    activeMode,
    currentCityData,
    weatherForecast,
    setActiveMode,
    setCurrentCityData,
    setWeatherForecast,
  };
}

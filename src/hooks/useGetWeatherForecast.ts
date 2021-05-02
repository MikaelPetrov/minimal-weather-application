import moment from "moment";
import { useEffect, useState } from "react";
import { instance } from "../api/api";
import { ABSOLUTE_ZERO } from "../constants/constants";

export function useGetWeatherForecast(): any {
  const [activeMode, setActiveMode] = useState<any>(false);
  const [currentCityData, setCurrentCityData] = useState<any>({});
  const [weatherForecast, setWeatherForecast] = useState<any>({});

  function formatTime(time: any, timeFormat: string) {
    return moment(time).format(timeFormat);
  }

  async function getWeatherForecast(currentCityData: any) {
    try {
      const response = await instance.get(
        `onecall?lat=${currentCityData.coord.lat}&lon=${currentCityData.coord.lon}&exclude=minutely,hourly,alerts`
      );
      const data = response.data;
      setWeatherForecast({
        dt_utc: formatTime(
          new Date(1970, 0, 1, 0, 0, data.current.dt + data.timezone_offset, 0),
          "dddd, D MMMM YYYY | h:mmA"
        ),
        weather: data.current.weather[0].main,
        temp: Math.round(data.current.temp - ABSOLUTE_ZERO),
        humidity: data.current.humidity,
        pressure: (data.current.pressure / 1000).toFixed(3),
        wind_speed: (data.current.wind_speed * 1.60934).toFixed(1),
        sunrise: formatTime(new Date(1970, 0, 1, 0, 0, data.current.sunrise + data.timezone_offset, 0), "h:mm A"),
        sunset: formatTime(new Date(1970, 0, 1, 0, 0, data.current.sunset + data.timezone_offset, 0), "h:mm A"),
        daytime: formatTime(new Date(1970, 0, 1, 0, 0, data.current.sunset - data.current.sunrise, 0), "HH{b} mm{c}")
          .replace("{b}", "h")
          .replace("{c}", "m"),
        daily: data.daily.map((obj: any) => {
          return {
            dt: obj.dt,
            weather: obj.weather[0].main,
            temp: [obj.temp.min, obj.temp.max],
          };
        }),
      });
      return {};
    } catch {
      console.error();
    }
  }

  useEffect(() => {
    if (currentCityData.coord) {
      getWeatherForecast(currentCityData);
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

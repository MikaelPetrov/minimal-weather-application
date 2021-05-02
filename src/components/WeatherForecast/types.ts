export type TypeWeatherForecast = {
  dt_utc: string;
  weather: string;
  temp: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  sunrise: string;
  sunset: string;
  daytime: string;
  daily: [
    {
      dt: number;
      weather: string;
      temp: {
        min: number;
        max: number;
      };
    }
  ];
};

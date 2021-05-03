export type TypeTempListData = {
  id: number;
  name: string;
  country: string;
  coord: TypeCoord | null;
  temp: number;
  dt: number;
  sunrise: number;
  sunset: number;
};

export type TypeCoord = {
  lat: number;
  lon: number;
};

export type TypeWeatherForecast = {
  dt: string;
  weather: string;
  temp: TypeTemp;
  humidity: number;
  pressure: string;
  wind_speed: string;
  sunrise: string;
  sunset: string;
  daytime: string;
  daily: TypeDaily[];
};

export type TypeDaily = {
  dt: string;
  weather: any;
  temp: TypeTemp;
  humidity: number;
  pressure: number;
  wind_speed: number;
  sunrise: string;
  sunset: string;
  daytime: string;
};

export type TypeTemp = {
  day: number | null;
  max: number | null;
  min: number | null;
};

export type TypeWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

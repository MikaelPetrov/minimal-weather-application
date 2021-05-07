// typification tempListData

export type TypeTempListData = {
  id: number | null;
  name: string;
  country: string;
  coord: TypeCoord | null;
  temp: number | null;
  dt: number | 0;
  sunrise: number | 0;
  sunset: number | 0;
};

export type TypeCoord = {
  lat: number;
  lon: number;
};

export type TypeGroupListData = {
  [key: string]: {
    cities: TypeTempListData[];
    group: string;
  };
};

// typification weatherForecast

export type TypeWeatherForecast = {
  dt: string;
  weather: TypeWeather[];
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
  weather: TypeWeather[];
  temp: TypeTemp;
  humidity: number;
  pressure: string;
  wind_speed: string;
  sunrise: string;
  sunset: string;
  daytime: string;
};

export type TypeWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type TypeTemp = {
  day: number | null;
  max: number | null;
  min: number | null;
};

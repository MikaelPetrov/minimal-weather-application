import { useEffect, useState } from "react";
import { instance } from "../api/api";
import { toFindCities, toFormatTime, toGroupListData, toSortListData } from "../utils/helpers";
import { ABSOLUTE_ZERO } from "./constants";
import { TypeGroupListData, TypeTempListData } from "./types";

export function useGetCitiesListData() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");
  const [tempListData, setTempListData] = useState<TypeTempListData>();
  const [arrayListData, setArrayListData] = useState<TypeTempListData[]>([]);
  const [filteredListData, setFilteredListData] = useState<TypeTempListData[]>([]);
  const [citiesListData, setCitiesListData] = useState<TypeGroupListData>();

  async function getCityListData(searchValue: string) {
    try {
      const response = await instance.get(`weather?q=${searchValue.toLowerCase()}`);
      const data = response.data;
      setTempListData({
        id: data.id,
        name: data.name,
        country: data.sys.country,
        coord: data.coord,
        temp: Math.round(data.main.temp - ABSOLUTE_ZERO),
        dt: Date.parse(toFormatTime(new Date(1970, 0, 1, 0, 0, data.dt + data.timezone, 0), "")) / 1000,
        sunrise: Date.parse(toFormatTime(new Date(1970, 0, 1, 0, 0, data.sys.sunrise + data.timezone, 0), "")) / 1000,
        sunset: Date.parse(toFormatTime(new Date(1970, 0, 1, 0, 0, data.sys.sunset + data.timezone, 0), "")) / 1000,
      });
      return {};
    } catch {
      console.error();
    }
  }

  useEffect(() => {
    if (searchValue !== "") {
      getCityListData(searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    const filteredCity = arrayListData.filter((obj: TypeTempListData) => obj.id === tempListData?.id)[0]?.id;
    if (tempListData?.id !== filteredCity) {
      setArrayListData((prevState: TypeTempListData[]) => prevState.concat(tempListData!));
    }
  }, [tempListData, arrayListData]);

  useEffect(() => {
    const findedCity: TypeTempListData[] = toFindCities(arrayListData, filterValue);
    setFilteredListData(findedCity);
  }, [arrayListData, filterValue]);

  useEffect(() => {
    const sortedList: TypeTempListData[] = toSortListData(filteredListData);
    const groupedList: TypeGroupListData = toGroupListData(sortedList);
    setCitiesListData(groupedList);
  }, [filteredListData]);

  return {
    filterValue,
    citiesListData,
    setSearchValue,
    setFilterValue,
  };
}

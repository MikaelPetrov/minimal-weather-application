import { useEffect, useState } from "react";
import { instance } from "../api/api";
import { ABSOLUTE_ZERO } from "../constants/constants";
import { toGroupListData, toSortListData } from "../utils/helpers";

export function useGetCitiesListData(): any {
  const [searchValue, setSearchValue] = useState<string>("");
  const [tempListData, setTempListData] = useState<any>();
  const [arrayListData, setArrayListData] = useState<any>([]);
  const [citiesListData, setCitiesListData] = useState<any>([]);

  async function getCityListData(searchValue: string) {
    try {
      const response = await instance.get(`weather?q=${searchValue.toLowerCase()}`);
      setTempListData({
        id: response.data.id,
        name: response.data.name,
        country: response.data.sys.country,
        coord: response.data.coord,
        temp: Math.round(response.data.main.temp - ABSOLUTE_ZERO),
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
    const filteredCity = arrayListData.filter((obj: any) => obj.id === tempListData.id)[0]?.id;
    if (tempListData?.id !== filteredCity) {
      setArrayListData((prevState: any) => prevState.concat(tempListData));
    }
  }, [tempListData, arrayListData]);

  useEffect(() => {
    const sortedList = toSortListData(arrayListData);
    const groupedList = toGroupListData(sortedList);
    setCitiesListData(groupedList);
  }, [arrayListData]);

  return {
    citiesListData,
    setSearchValue,
  };
}

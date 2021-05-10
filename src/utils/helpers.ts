import moment from "moment";
import { TypeGroupListData, TypeTempListData } from "../hooks/types";

export function toFindCities(array: TypeTempListData[], filterValue: string) {
  const data = array.filter((value) =>
    value.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return data;
}

export function toSortListData(array: TypeTempListData[]) {
  const data = array.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
  return data;
}

export function toGroupListData(array: TypeTempListData[]) {
  const data = array.reduce(
    (accum: TypeGroupListData, city: TypeTempListData) => {
      if (!accum[city.name[0]]) {
        accum[city.name[0]] = { group: city.name[0], cities: [city] };
      } else {
        accum[city.name[0]].cities.push(city);
      }
      return accum;
    },
    {}
  );
  return data;
}

export function toFormatTime(time: Date | string, timeFormat: string) {
  return moment(time).format(timeFormat);
}

import moment from "moment";

export function toSortListData(array: any) {
  const data = array.sort((a: any, b: any) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
  return data;
}

export function toGroupListData(array: any) {
  const data = array.reduce((row: any, city: any) => {
    if (!row[city.name[0]]) row[city.name[0]] = { group: city.name[0], cities: [city] };
    else row[city.name[0]].cities.push(city);
    return row;
  }, {});
  return data;
}

export function toFormatTime(time: Date | string, timeFormat: string) {
  return moment(time).format(timeFormat);
}

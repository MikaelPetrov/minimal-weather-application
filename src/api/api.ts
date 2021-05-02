import axios from "axios";

export const instance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/",
  params: {
    appid: "330216f9e3042b8a57a7865c3de67865",
  },
});

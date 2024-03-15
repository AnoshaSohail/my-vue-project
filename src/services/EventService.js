import axios from "axios";
//apiClient is single axios instance for our app

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/AnoshaSohail/Vue3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};

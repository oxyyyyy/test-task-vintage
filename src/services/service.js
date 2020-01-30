import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://httpbin.org",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  postContactForm(data) {
    return apiClient.post("/post", data);
  }
};

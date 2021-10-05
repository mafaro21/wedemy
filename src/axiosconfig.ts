import axios from "axios";

//GLOBAL AXIOS SETUP
export default axios.create({
  baseURL: "http://localhost:9000", // <-- backend URL (can save it to .env)
  headers: {
    "Content-type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
  withCredentials: true
});
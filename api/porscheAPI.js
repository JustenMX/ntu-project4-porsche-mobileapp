import axios from "axios";

const porscheAPI = axios.create({
  baseURL: "http://localhost:9091/porsche/api",
  timeout: 8000,
});

export default porscheAPI;

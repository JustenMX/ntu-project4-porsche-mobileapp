import axios from "axios";

const porschesgAPI = axios.create({
  baseURL: "http://localhost:9090/porschesg/api",
  timeout: 8000,
});

export default porschesgAPI;

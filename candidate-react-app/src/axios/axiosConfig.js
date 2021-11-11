import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:49743/api/Candidate`,
});

export default api;

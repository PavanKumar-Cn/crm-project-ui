import axios from "axios";

// const BASE_URL = (import.meta.env.DEV) ? import.meta.env.API_BASE_URL
//   : "https://assess.corenuts.in";

export const openaxios = axios.create({
  baseURL: "http://localhost:8089/api",
});
// http://localhost:8089/api/issueAssignment/1

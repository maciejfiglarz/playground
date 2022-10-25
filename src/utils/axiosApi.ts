import axios from "axios";
import { baseURL, apiURL } from "config";

const axiosClient = axios.create({
  baseURL: apiURL,
  withCredentials: true,
});

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     console.log("errors Axios", error.response.status);
//     if (error.response.status === 401) {
//       //place your reentry code
//       // window.location.replace(`${baseURL}login`);
//     }
//     return error;
//   }
// );

export default axiosClient;

import axios from "axios";

const axiosInstance = axios.create({
  baseURL:"https://backend-flipkart-fa0b.onrender.com/api",
  
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;

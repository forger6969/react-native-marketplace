import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

// 👉 base URL (можешь заменить на .env позже)
const BASE_URL = "https://api.myapp.com";

// 🚀 создаём axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

api.interceptors.request.use(
  async (config) => {

    const token = await AsyncStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,

  (error) => {
    console.log("API ERROR:", error.response?.data || error.message);
    Toast.show({
        type:"glass",
        text1:error.response?.data || error.message || "Server error",

    })
    return Promise.reject(error);
  }
);

export default api;
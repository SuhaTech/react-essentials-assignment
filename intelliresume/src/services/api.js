import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api/",
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // LocalStorage se accessToken read karo
    const token = localStorage.getItem("accessToken");

    // Public auth routes check
    const isPublicRoute =
      config.url?.includes("auth/login") ||
      config.url?.includes("auth/register") ||
      config.url?.includes("auth/forgot-password") ||
      config.url?.includes("auth/verify-otp") ||
      config.url?.includes("auth/reset-password");

    // Auto-attach Bearer token for protected endpoints
    if (token && !isPublicRoute) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
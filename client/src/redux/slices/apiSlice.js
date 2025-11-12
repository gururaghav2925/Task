import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Use environment variable or fallback based on environment
// In production (Vercel), use the Render backend URL
// In development, use localhost or env variable
const getApiUri = () => {
  // Check if environment variable is set
  if (import.meta.env.VITE_APP_BASE_URL) {
    return import.meta.env.VITE_APP_BASE_URL;
  }
  
  // In production, use Render backend
  if (import.meta.env.PROD) {
    return "https://taskify-jhhu.onrender.com";
  }
  
  // In development, use localhost
  return "http://localhost:5000";
};

const API_URI = getApiUri();
const API_BASE_URL = API_URI + "/api";

console.log("Environment:", import.meta.env.MODE);
console.log("Is Production:", import.meta.env.PROD);
console.log("VITE_APP_BASE_URL:", import.meta.env.VITE_APP_BASE_URL);
console.log("API Base URL:", API_BASE_URL);

const baseQuery = fetchBaseQuery({ 
  baseUrl: API_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    // Add any custom headers if needed
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});

    
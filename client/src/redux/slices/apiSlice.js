import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Use environment variable or fallback based on environment
// In production (Vercel), use the Render backend URL
// In development, use localhost or env variable
const API_URI = import.meta.env.VITE_APP_BASE_URL || 
  (import.meta.env.PROD 
    ? "https://taskify-jhhu.onrender.com" 
    : "http://localhost:5000");

console.log("API Base URL:", API_URI);

const baseQuery = fetchBaseQuery({ 
  baseUrl: API_URI + "/api",
  credentials: "include",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});

    
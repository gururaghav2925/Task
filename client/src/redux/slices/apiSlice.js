import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Use environment variable or fallback to localhost:5000 (server default port)
const API_URI = import.meta.env.VITE_APP_BASE_URL || "http://localhost:5000";

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

    
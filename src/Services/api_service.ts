// services/api_gemini.ts

import axios from "axios";

const bases = process.env.NEXT_PUBLIC_BASES_API_GEMINI;
const urlDB = process.env.NEXT_PUBLIC_DB_URL;

export const fetchAPIGemini = axios.create({
  // BASEURL: Mengarahkan ke proxy lokal, termasuk versi
  baseURL: `/api/gemini/${bases}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchData = axios.create({
  baseURL: urlDB,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "no-cache": "no-cache, must-revalidate",
  },
});

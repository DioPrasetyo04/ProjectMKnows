// services/api_gemini.ts

import axios from "axios";

const bases = process.env.NEXT_PUBLIC_BASES_API_GEMINI;

export const fetchAPIGemini = axios.create({
  // BASEURL: Mengarahkan ke proxy lokal, termasuk versi
  baseURL: `/api/gemini/${bases}`,
  headers: {
    "Content-Type": "application/json",
  },
});

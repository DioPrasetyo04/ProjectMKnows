// services/api_gemini.ts

import axios from "axios";

const bases = "v1beta";

export const fetchAPIGemini = axios.create({
  // BASEURL: Mengarahkan ke proxy lokal, termasuk versi
  baseURL: `/api/gemini/${bases}`,
  headers: {
    "Content-Type": "application/json",
  },
});

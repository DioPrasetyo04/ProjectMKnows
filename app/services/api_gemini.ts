import axios from "axios";

const bases = ["v1beta", "v1"];
const selectedBase = bases[Math.floor(Math.random() * bases.length)];

export const fetchAPIGemini = axios.create({
  baseURL: `https://generativelanguage.googleapis.com/${selectedBase}`,
  headers: {
    "Content-Type": "application/json",
    // "x-goog-api-key": process.env.NEXT_PUBLIC_API_KEY_GEMINI as string,
  },
});

// backend/src/services/services.js
import axios from "axios";
import { GITHUB_USERNAME, GITHUB_TOKEN } from "../config.js";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
    "User-Agent": "github-activity-feed",
  },
});

// 🔹 Fetch GitHub user profile
export async function fetchGithubUser() {
  try {
    const res = await api.get(`/users/${GITHUB_USERNAME}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error.message);
    return null;
  }
}

// 🔹 Fetch GitHub activity/events
export async function fetchGithubActivity() {
  try {
    const res = await api.get(`/users/${GITHUB_USERNAME}/events`);
    return res.data;
  } catch (error) {
    console.error("Error fetching GitHub activity:", error.message);
    return [];
  }
}

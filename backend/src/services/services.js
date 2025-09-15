import axios from "axios";
import { GITHUB_USERNAME, GITHUB_TOKEN } from "../config.js";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
    "User-Agent": "github-activity-feed",
  },
});

// ✅ Combined function: fetch both profile and activity
export async function fetchGithubData() {
  try {
    const [profileRes, eventsRes] = await Promise.all([
      api.get(`/users/${GITHUB_USERNAME}`),
      api.get(`/users/${GITHUB_USERNAME}/events`),
    ]);

    return {
      profile: profileRes.data,
      events: eventsRes.data,
    };
  } catch (error) {
    console.error("Error fetching GitHub data:", error.message);
    return { profile: null, events: [] };
  }
}

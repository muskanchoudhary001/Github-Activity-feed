import axios from 'axios'
import { GITHUB_USERNAME, GITHUB_TOKEN } from "../config.js"

const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/events`


export async function fetchGithubActivity() {
    try {
        const response = await axios.get(GITHUB_API_URL, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                "User-Agent": "github-activity-feed"
            }
        })
        return response.data
    } catch (error) {
        console.error("Error fetching Github Activity:", error.message)
        return []
    }

}


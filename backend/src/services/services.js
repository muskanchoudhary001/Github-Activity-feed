import axios from 'axios'
import { GITHUB_USERNAME } from "../../../src/config.js"

const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/events`


export async function fetchGithubActivity() {
    try {
        const response = await axios.get(GITHUB_API_URL)
        return response.data
    } catch (error) {
        console.error("Error fetching Github Activity:", error.message)
        return []
    }

}


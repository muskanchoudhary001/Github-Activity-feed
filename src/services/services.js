const axios = require("axios")
const { GITHUB_USERNAME } = require("../config")

const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/events`


async function fetchGithubActivity() {
    try {
        const response = await axios.get(GITHUB_API_URL)
        return response.data
    } catch (error) {
        console.error("Error fetching Github Activity:", error.message)
        return []
    }

}

module.exports = { fetchGithubActivity }
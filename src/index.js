import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { fetchGithubActivity } from './services/services.js'
import { PORT, GITHUB_USERNAME } from './config.js'


const app = express()
const server = http.createServer(app)
const io = new Server(server)


app.use(express.static("public"))

io.on("connection", (socket) => {
    console.log("Client connected");
    socket.on("disconnect", () => {
        console.log("Client disconnected")
    })


    // setInterval(async () => {
    //     const activity = await fetchGithubActivity();
    //     socket.emit("activity", activity);
    // }, 10000) //fetch everys 10secs
})


const updateGitHubActivity = async () => {
    try {

        const activity = await fetchGithubActivity(GITHUB_USERNAME)
        io.emit("github activity", activity)

    } catch (error) {
        console.error("Error updating Github Activity:", error);
    }
}

setInterval(updateGitHubActivity, 10000) //fetch activtiy every after 10secs

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
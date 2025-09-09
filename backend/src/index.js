import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { fetchGithubActivity } from './services/services.js'
import { PORT, GITHUB_USERNAME } from './config.js'

const app = express()
const server = http.createServer(app)

// ✅ Enable CORS for your React frontend (localhost:5173)
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
})

io.on("connection", (socket) => {
  console.log("Client connected")

  socket.on("disconnect", () => {
    console.log("Client disconnected")
  })
})

const updateGitHubActivity = async () => {
  try {
    const activity = await fetchGithubActivity(GITHUB_USERNAME)
    io.emit("github activity", activity)
  } catch (error) {
    console.error("Error updating Github Activity:", error)
  }
}

// ✅ fetch every 30 seconds
setInterval(updateGitHubActivity, 30000)

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

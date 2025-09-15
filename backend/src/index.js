import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { fetchGithubActivity, fetchGithubUser } from './services/services.js'
import { PORT } from './config.js'

const app = express()
const server = http.createServer(app)

// ✅ Enable CORS
import cors from "cors"
app.use(cors())

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

// ✅ Route for Header.jsx
app.get("/user", async (req, res) => {
  const user = await fetchGithubUser()
  if (user) {
    res.json(user)
  } else {
    res.status(500).json({ error: "Failed to fetch GitHub user" })
  }
})

const updateGitHubActivity = async () => {
  try {
    const activity = await fetchGithubActivity()
    io.emit("github activity", activity)   // <-- emits to frontend
  } catch (error) {
    console.error("Error updating Github Activity:", error)
  }
}

// ✅ run once immediately
updateGitHubActivity()

// ✅ fetch every 10 seconds
setInterval(updateGitHubActivity, 10000)

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

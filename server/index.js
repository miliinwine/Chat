const express = require("express")
const http = require("http")
const { Server } = require("socket.io")
const cors = require("cors")
const app = express()

app.use(cors({ origin: "*" }))

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

server.listen(300, () => {
    console.log("Server is running!");
})

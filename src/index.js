const formatMessage = require("./utils/formatMessage.js");

const {
  addPlayer,
  getAllPlayers,
  getPlayer,
  removePlayer,
} = require("./utils/players.js");

const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app); // create the HTTP server using the Express app created on the previous line
const io = socketio(server);

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

io.on("connection", () => {
  // listen for new connections to Socket.IO
  console.log("A new player connected!");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  server.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
  });
});

const app = require("./src/app");

const server = require("http").createServer(app);
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("A user connected");
});
server.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});

const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("message", ({ userName, value }) => {
    io.emit("message", { userName, value });
  });
});

httpServer.listen(3001, () => console.log("> 3001 <"));

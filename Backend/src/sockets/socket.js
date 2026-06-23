const { Server } = require("socket.io");

let io;

const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);

    // Join Group
    socket.on("joinGroup", (groupId) => {
      socket.join(groupId);
      console.log(`Joined group ${groupId}`);
    });

    // Send Message
    socket.on("sendMessage", (data) => {
      io.to(data.groupId).emit("receiveMessage", data);
    });

    socket.on("disconnect", () => {
      console.log("User Disconnected:", socket.id);
    });
  });
};

const getIO = () => io;

module.exports = { initializeSocket, getIO };
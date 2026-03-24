import { io } from "socket.io-client";

// 🔥 Backend URL
const URL = "http://localhost:5000";

const socket = io(URL, {
  withCredentials: true,
  transports: ["websocket"],
});

export default socket;
import { io } from "socket.io-client";

let socketIoConnection = io("https://lobbyserver.onrender.com:3005");

window.onbeforeunload = () => {
  socketIoConnection.disconnect();
};

export { socketIoConnection };

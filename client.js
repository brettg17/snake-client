const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("succesfully connected to gamer server")
  });

  conn.on("connect", () => {
    console.log("Name: BWG")
  });

  function handleDisconnection() {
    console.log('Player has disconnected from the server.');
    // Additional cleanup or reconnection logic can be added here if needed
  }
  
  
  conn.on('end', handleDisconnection);
  conn.on('close', handleDisconnection);

  return conn;
};


console.log("Connecting ...");
connect();

module.exports = "connect";
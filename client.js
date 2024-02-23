const net = require("net");
const {IP, PORT} = require("./constant")


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:IP,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // connect client to the server. when connect succesful displays  connect message to client 
  //as well as basic instructions on how to play game. display user initials above snake
  conn.on("connect", () => {
    console.log("succesfully connected to gamer server");
    conn.write("Name: BWG");
    console.log("press 'w' to move up")
    console.log("press 'a' to move left")
    console.log("press 's' to move down")
    console.log("press 'd' to right")
  });

  conn.on("data", (data) => {
    console.log(data)
  })
  return conn;
};


console.log("Connecting ...");

module.exports = {connect};

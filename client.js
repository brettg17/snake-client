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

  conn.on("connect", () => {
    console.log("succesfully connected to gamer server");
    conn.write("Name: BWG");
  });

  conn.on("data", (data) => {
    console.log(data)
  })
  return conn;
};


console.log("Connecting ...");

module.exports = {connect};

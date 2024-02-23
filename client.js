const net = require("net");



// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:"localhost",
    port: 50541, // PORT number here,
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
//const connection = connect();
//connect();
//setupInput(connection);

module.exports = {connect};

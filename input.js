const { connect } = require("http2");

let connection;


const setupInput =  (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume()
  const handleUserInput = function (key) {
    if (key === "\u0003") {
       process.exit();
     }
    if ( key === "w") {
      conn.write("Move: up")
    }
    if ( key === "a") {
      conn.write( "Move: left")
    }
    if ( key === "s") {
      conn.write( "Move: down")
    }
    if ( key === "d") {
      conn.write( "Move: right")
    }
    if ( key === "q") {
      conn.write( "Say: Snek will devour you") 
    }
    if ( key === "e") {
      conn.write( "Say: get ready to get crushed") 
    }
    return
  }
  stdin.on("data", handleUserInput);
  return stdin;
};



module.exports = {setupInput};



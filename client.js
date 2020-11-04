const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  //Prints a message when the connection is successfully established
  conn.on('connect', () => console.log("Connection successfully established to game server"));
  conn.on('connect', () => conn.write("Name: JF"));
  // conn.on('connect', data => conn.write("Move: up"));

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
}

module.exports = connect;
const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const chats = new Map();

app.get('/chats', (req, res) => {
  res.json(chats);
});

io.on('connection', (socket) => {
  console.log('socket connected', socket.id);
});

server.listen(9999, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('server started');
});

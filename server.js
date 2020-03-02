const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = require('./app');

const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Env setup
dotenv.config({ path: './config.env' });
const { devConfig, prodConfig } = require('./config/index');

const config = devConfig || prodConfig;

const connect = mongoose
  .connect(config.dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const { Chat } = require('./models/chatModel');

io.on('connection', socket => {
  socket.on('Input Chat Message', msg => {
    connect.then(db => {
      try {
        let chat = new Chat({
          message: msg.chatMessage,
          sender: msg.userId,
          type: msg.type
        });

        chat.save((err, doc) => {
          // console.log(doc);
          if (err) return res.json({ success: false, err });

          Chat.find({ _id: doc._id })
            .populate('sender')
            .exec((err, doc) => {
              return io.emit('Output Chat Message', doc);
            });
        });
      } catch (error) {
        console.error(error);
      }
    });
  });
});

const port = config.authPort || 5000;

server.listen(port, () => {
  console.log(`Server Running at ${port}`);
});

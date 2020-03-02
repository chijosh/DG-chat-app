const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');

const userRouter = require('./routes/userRouter');
const chatRouter = require('./routes/chatRouter');
const { auth } = require('./middleware/auth');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', userRouter);
app.use('/api/chat', chatRouter);

// Writing image from client to uploads
let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

let upload = multer({ storage: storage }).single('file');

app.post('/api/chat/uploadfiles', auth, (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({ success: true, url: res.req.file.path });
  });
});

// Displays image in node js server to client (react js)

app.use('/server/uploads', express.static('/server/uploads'));

module.exports = app;

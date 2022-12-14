const express = require('express');
const cors = require('cors');
const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use(
  cors({
    origin: [
      'http://localhost:7890',
      // deploy link
      'https://terminalescaperoom.herokuapp.com',
    ],
    credentials: true,
  })
);

app.use('/api/v1/rooms', require('./controllers/rooms'));
app.use('/api/v1/userItem', require('./controllers/user_items'));
app.use('/api/v1/users', require('./controllers/users'));
app.use('/api/v1/items', require('./controllers/items'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;

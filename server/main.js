const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const messageRoutes = require('./Routes/Message');
const mongoDB = require('./DB/Connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

mongoDB('mongodb://127.0.0.1:27017/form');

app.use(bodyParser.json());

app.use(messageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

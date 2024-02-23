const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Add this line to enable CORS

app.get('/', (req, res) =>
  res.json('Hello World!')
);
app.get('/home', (req, res) =>
  res.json('Hello World! home page')
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

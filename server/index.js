const express = require('express');
const axios = require('axios');
const api = require('./apiCalls.js');
const app = express();
const port = 3000;

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/dogs', (req, res) => {
  api.getDogGif((err, results) => {
    if (err) {
      res.status(400).send('something went wrong');
    } else {
      res.status(200).json(results.data);
    }
  });
});

app.listen(port, () => console.log(`app is listening on port ${port}!!`));

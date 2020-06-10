const express = require('express');
const axios = require('axios');
const api = require('./apiCalls.js');
const controllers = require('./controllers.js');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/dogs', (req, res) => {
  api.getDogGif((err, results) => {
    if (err) {
      res.status(400).send('something went wrong');
    } else {
      res.status(200).json(results.data[0]);
    }
  });
});

app.get('/hikes/:lon&:lat', (req, res) => {
  const { params } = req;
  api.getHikes(params.lon, params.lat, (err, results) => {
    if(err) {
      res.status(400).send('something went wrong');
    } else {
      res.status(200).json(results.data.trails);
    }
  });
  // res.status(200).json(params.lat);
});

app.post('/users', (req, res) => {
  const { username } = req.body;
  controllers.addUser(username, (err, data) => {
    if(err) {
      res.status(400).send('something went wrong');
    } else {
      res.status(201).send(username + ' added to database');
    }
  });
});

app.post('/favoriteDogs', (req, res) => {
  const { username } = req.body;
  const { url } = req.body;
  controllers.addFavoriteDog(username, url, (err, data) => {
    if(err) {
      res.status(400).send('something went wrong');
    } else {
      res.status(201).send('favorite dog added');
    }
  });
});

app.listen(port, () => console.log(`app is listening on port ${port}!!`));

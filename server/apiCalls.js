const axios = require('axios');
const dogUrl = "https://api.thedogapi.com/v1/images/search?mime_types=gif";
const hikesUrl = 'https://www.hikingproject.com/data/get-trails'
const keys = require('../config.js');

module.exports = {
  getDogGif: (callback) => {
    axios.get(dogUrl, { "x-api-key": keys.THE_DOG_API_KEY })
      .then((response) => {
        callback(null, response);
      })
      .catch((error) => {
        callback(error, null);
      })
      .finally(() => {

      });
  },
  getHikes: (lon, lat, callback) => {
    axios.get(`${hikesUrl}?lon=${lon}&lat=${lat}&key=${keys.HIKES_API_KEY}`)
      .then((response) => {
        callback(null, response);
      })
      .catch((error) => {
        callback(error, null);
      })
      .finally(() => {

      });
  }
};

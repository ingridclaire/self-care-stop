const db = require('../mysqlDB/connection.js');

// QUERY STRINGS

module.exports = {
  addUser: (username, callback) => {
    db.query(`insert into users (username) values ('${username}')`, (err, results, fields) => {
      if(err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },
  addFavoriteDog: (username, url, callback) => {
    const addDogStr = `insert into dogs (url, user_id) values ('${url}', (select id from users where username = '${username}'));`;
    db.query(addDogStr, (err, results, fields) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }
}

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'selfcare'
});

connection.connect((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('database connected!');
  }
});

module.exports = connection;
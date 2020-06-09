const db = require('./connection');

// SETUP AND CREATE TABLE QUERY STRINGS
const create = {
  users: `CREATE TABLE users (id INT AUTO_INCREMENT, username VARCHAR(30) UNIQUE, PRIMARY KEY (id));`,
  dogs: `CREATE TABLE dogs (id INT AUTO_INCREMENT, url VARCHAR(80), user_id INT NOT NULL, PRIMARY KEY (id), FOREIGN KEY (user_id) REFERENCES users(id))`,
  hikes: `CREATE TABLE hikes (id INT AUTO_INCREMENT, url VARCHAR(80), name VARCHAR(40), distance DECIMAL(5, 2), summary VARCHAR(200), user_id INT NOT NULL, PRIMARY KEY (id), FOREIGN KEY (user_id)REFERENCES users(id));`,
  breathe: `CREATE TABLE breathe (id INT AUTO_INCREMENT, src VARCHAR(80), href VARCHAR(80), user_id INT NOT NULL, PRIMARY KEY (id), FOREIGN KEY (user_id) REFERENCES users(id));`
}

// for (var key in create) {
//   db.query(create[key], (err, results, fields) => {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log('table created');
//     }
//   });
// }

// db.query('insert into users (username) values ("ingridclaire")', (err, results, fields) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log('user added to database');
//   }
// })

db.query('insert into dogs (url, user_id) values ("https://cdn2.thedogapi.com/images/B1fG6PT4Q.gif", (SELECT id FROM users WHERE username = "ingridclaire"));', (err, results, fields) => {
  if (err) {
    console.log(err);
  } else {
    console.log('favorite dog added to database');
  }
})



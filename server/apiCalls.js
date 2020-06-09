const axios = require('axios');
const dogUrl = "https://api.thedogapi.com/v1/images/search?mime_types=gif";
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
  }
}

// module.exports = {
//   addUser: async () => {
//     const User = require('../database/models/User.js');
//     const Dog = require('../database/models/Dog.js');

//     User.hasMany(Dog, { as: 'Dogs', foreignKey: 'userId' });
//     Dog.belongsTo(User, { as: 'User', foreignKey: 'userId' });

//     const user = await User.create({
//       username: 'ingridclaire'
//     }).catch((err) => {
//       console.log(err)
//     });
//     const dog = await Dog.create({
//       url: "https://cdn2.thedogapi.com/images/B1fG6PT4Q.gif",
//       userId: user.id
//     }).catch((err) => {
//       console.log(err);
//     });
//   }

// }

// module.exports.addUser();


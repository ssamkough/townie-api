const { db } = require('../../database/db');
const bcrypt = require('bcrypt');

module.exports = {
  LoginUser: (email, password) => new Promise((resolve, reject) => {
    db.select('*').from('users').where('email', '=', email).then((user) => {
      if (user.length !== 0) {
      	const isValid = bcrypt.compareSync(password, user[0].password);
      	if (isValid) {
        	return resolve(user[0]);
      	}

      	return reject(new Error('Invalid Password or Email'));
      }

      return reject(new Error('No such user'));
    })
      .catch((err) => reject(err));
  })
};

const bcrypt = require('bcrypt');
const { db } = require('../../database/db');

module.exports = {
  LoginUser: (username, password) => new Promise((resolve, reject) => {
    db.select('*').from('users').where('username', '=', username).then((user) => {
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
  }),
  RegisterUser: (user_role, town_id, gender, username, email, password, firstName, lastName, birthday, address) => new Promise((resolve, reject) => {
    db('users').insert({
      user_role,
      town_id,
      gender,
      username,
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      date_of_birth: new Date(birthday),
      address,
      created_at: new Date(),
      updated_at: new Date(),
    })
      .returning('*')
      .then((user) => resolve(user))
      .catch((err) => reject(new Error(err)));
  }),
  GetZipCode: (zipcode) => new Promise((resolve, reject) => db.select('*').from('zip_codes').where('zip', '=', zipcode)
    .then((data) => resolve(data[0]))
    .catch((err) => reject(new Error(err)))),
};

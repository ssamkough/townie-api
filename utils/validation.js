const Validator = require('validator');

module.exports = {
  // eslint-disable-next-line
  ValidateRegister: (user_role, town_id, gender, username, email, password, firstName, lastName, birthday, address) => {
    const errors = {};

    if (!user_role) errors.user_role = 'Invalid user_role';
    if (!town_id) errors.town_id = 'Invalid town_id';
    if (!gender) errors.gender = 'Invalid gender';
    if (!username) errors.username = 'Invalid username';
    if (!Validator.isEmail(email)) errors.email = 'Invalid email';
    if (!password) errors.password = 'Invalid password';
    if (!firstName) errors.firstName = 'Invalid firstName';
    if (!lastName) errors.lastName = 'Invalid lastName';
    if (!birthday) errors.birthday = 'Invalid birthday';
    if (!address) errors.address = 'Invalid address';

    return errors;
  },
};

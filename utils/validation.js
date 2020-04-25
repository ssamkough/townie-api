const Validator = require('validator');

module.exports = {
  ValidateLogin: (email, password) => {
    const errors = {};

    if (!Validator.isEmail(email)) errors.email = 'Invalid Email';
    if (password === null || password.length === 0) errors.password = 'Invalid Password';

    return errors;
  },
};

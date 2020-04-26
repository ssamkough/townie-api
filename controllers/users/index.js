const bcrypt = require('bcrypt');
const { ValidateRegister } = require('../../utils/validation');
const userService = require('../../services/user');

module.exports = {
  GetUser: (req, res) => res.status(200).send({
    Message: 'hi from user controller',
  }),
  Login: (req, res) => {
    const { username } = req.body;
    const { password } = req.body;

    if (!password || !username) {
      return res.status(400).send({ err: 'Invalid Password or Username' });
    }

    return userService.LoginUser(username, password)
      .then((data) => res.status(200).send({ data }))
      .catch((err) => res.status(400).send({ err: err.message }));
  },
  Register: (req, res) => {
    const {
      user_role,
      zipcode,
      gender,
      username,
      email,
      password,
      firstName,
      lastName,
      birthday,
      address,
    } = req.body;

    const errors = ValidateRegister(user_role, zipcode, gender, username, email, password, firstName, lastName, birthday, address);
    if (Object.keys(errors).length !== 0) {
      return res.status(400).send({ errors });
    }

    const hash = bcrypt.hashSync(password, 10);

    return userService.RegisterUser(user_role, zipcode, gender, username, email, hash, firstName, lastName, birthday, address)
      .then((user) => {
        return userService.GetZipCode(zipcode)
          .then((data) => {
            const response = {
                ...user[0],
                state: data.state_name,
                city: data.city,
                zipcode,
              };

              return res.status(200).send(response);
            })
          })
      .catch((err) => res.status(400).send(err.message));
  },
  GetZipCode: (req, res) => {
    const { zipcode } = req.body;
    if (!zipcode) {
      return res.status(400).send({
        err: 'Missing zipcode',
      });
    }

    return userService.GetZipCode(zipcode)
      .then((data) => {
        const response = {
          state: data.state_name,
          city: data.city,
          zipcode,
        };

        return res.status(200).send(response);
      })
      .catch((err) => res.status(200).send({ err: err.message }));
  },
};

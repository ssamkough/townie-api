const { ValidateLogin } = require('../../utils/validation');
const userService = require('../../services/user');

module.exports = {
  GetUser: (req, res) => res.status(200).send({
    Message: 'hi from user controller',
  }),
  Login: (req, res) => {
    const { email } = req.body;
    const { password } = req.body;

    const errors = ValidateLogin(email, password);
    if (Object.keys(errors).length !== 0) {
      return res.status(400).send(errors);
    }

    return userService.LoginUser(email, password)
      .then((data) => res.status(200).send({ data }))
      .catch((err) => res.status(400).send({ err: err.message }));
  },
  Register: (req, res) => {
    const { email } = req.body;
    const { password } = req.body;
    const { password2 } = req.body;

    const errors = ValidateLogin(email, password, password2);
    if (Object.keys(errors).length !== 0) {
      return res.status(200).send(errors);
    }

    return res.status(200).send({
      email,
      password,
      password2,
    });
  },
};

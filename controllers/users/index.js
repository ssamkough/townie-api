const { ValidateLogin } = require('../../utils/validation');

module.exports = {
	GetUser: (req, res) => {
		return res.status(200).send({
			"Message": "hi from user controller"
		})
	},
	Login: (req, res) => {
		const email = req.body.email;
		const password = req.body.password;

		const errors = ValidateLogin(email, password);
		if (Object.keys(errors).length !== 0) {
			return res.status(400).send(errors);
		}

		return res.status(200).send({
			email: email,
			password: password
		})
	},
	Register: (req, res) => {
		const email = req.body.email;
		const password = req.body.password;
		const password2 = req.body.password2;

		const errors = ValidateLogin(email, password, password2);
		if (Object.keys(errors).length !== 0) {
			return res.status(200).send(errors);
		}

		return res.status(200).send({
			email: email,
			password: password,
			password2: password2
		})
	}
}
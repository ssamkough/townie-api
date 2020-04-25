module.exports = {
	GetUser: (req, res) => {
		return res.status(200).send({
			"Message": "hi from user controller"
		})
	}
}
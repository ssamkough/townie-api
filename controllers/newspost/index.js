const newspostService = require('../../services/newspost')

module.exports = {
	GetNewspost: (req, res) => {
		const { town_id } = req.body;

		if (!town_id) {
			return res.status(400).send({
				err: "Missing town_id"
			})
		}

		return newspostService.GetNewspost(town_id)
			.then(data => res.status(200).send({ data }))
			.catch(err => res.status(400).send({ err: err.message }))
	}
}
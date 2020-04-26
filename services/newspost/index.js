const { db } = require('../../database/db')

module.exports = {
	GetNewspost: (town_id) => new Promise((resolve, reject) => {
		return db.select('*').from('newspost').where('town_id', '=', town_id)
			.then(data => resolve(data))
			.catch(err => reject(err))
	})
}
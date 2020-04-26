const { db } = require('../../database/db');

module.exports = {
  GetNewspost: (town_id) => new Promise((resolve, reject) => db.select('*').from('newspost').where('town_id', '=', town_id)
    .then((data) => resolve(data))
    .catch((err) => reject(err))),
  CreateNewspost: (user_id, town_id, title, content) => new Promise((resolve, reject) => db('newspost').insert({
    user_id,
    town_id,
    title,
    content,
    created_at: new Date(),
    updated_at: new Date(),
  }).returning('*')
    .then((data) => resolve(data[0]))
    .catch((err) => reject(new Error(err)))),
};

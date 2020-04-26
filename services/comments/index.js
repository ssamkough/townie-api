const { db } = require('../../database/db');

module.exports = {
  CreateComment: (discussion_post_id, user_id, content) => new Promise((resolve, reject) => db('discussion_comment').insert({
    discussion_post_id,
    user_id,
    content,
    created_at: new Date(),
    updated_at: new Date(),
  }).returning('*')
    .then((data) => resolve(data[0]))
    .catch((err) => reject(new Error(err)))),
};

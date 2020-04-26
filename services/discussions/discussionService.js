const { db } = require('../../database/db');

module.exports = {
  GetDiscussionPosts: (town_id) => new Promise((resolve, reject) => db.select('*').from('discussion_post').where('town_id', '=', town_id)
    .then((data) => resolve(data))
    .catch((err) => reject(new Error(err)))),
  CreateNewDiscussionPost: (title, text, user_id, town_id) => new Promise((resolve, reject) => db('discussion_post')
    .insert({
      title,
      content: text,
      user_id,
      town_id,
      view_count: 0,
      comment_count: 0,
      created_at: new Date(),
      updated_at: new Date(),
    })
    .returning('*')
    .then((data) => resolve(data[0]))
    .catch((err) => reject(new Error(err)))),
  GetDiscussionComments: (discussion_post_id) => new Promise((resolve, reject) => db.select('*').from('discussion_comment').where('discussion_post_id', '=', discussion_post_id)
    .then((data) => resolve(data))
    .catch((err) => reject(new Error(err)))),
};

const discussionService = require('../../services/discussions/discussionService');

module.exports = {
  GetDiscussionPosts: (req, res) => {
    const { town_id } = req.body;

    if (!town_id) {
      return res.status(400).send({ err: 'No town_id provided' });
    }

    return discussionService.GetDiscussionPosts(town_id)
      .then((data) => res.status(200).send({ data }))
      .catch((err) => res.status(400).send({ err: err.message }));
  },
  CreateNewDiscussionPost: (req, res) => {
    const {
      title,
      text,
      user_id,
      town_id,
    } = req.body;

    if (!title || !text || !user_id || !town_id) {
      return res.status(400).send({
        err: 'Missing title, text, user_id or town_id',
      });
    }

    return discussionService.CreateNewDiscussionPost(title, text, user_id, town_id)
      .then((data) => res.status(200).send({ data }))
      .catch((err) => res.status(400).send({ err }));
  },
  GetDiscussionComments: (req, res) => {
    const { discussion_post_id } = req.body;

    if (!discussion_post_id) {
      return res.status(400).send({ err: 'Missing discussion_post_id' });
    }

    return discussionService.GetDiscussionComments(discussion_post_id)
      .then((data) => res.status(200).send({ data }))
      .catch((err) => res.status(400).send({ err: err.message }));
  },
};

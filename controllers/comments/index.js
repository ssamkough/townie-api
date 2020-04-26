const commentsService = require('../../services/comments');


module.exports = {
  CreateComment: (req, res) => {
    const { discussion_post_id, user_id, content } = req.body;
    if (!discussion_post_id || !user_id || !content) {
      return res.status(400).send({
        err: 'Missing discussion_post_id, user_id or content',
      });
    }

    return commentsService.CreateComment(discussion_post_id, user_id, content)
      .then((data) => res.status(200).send({ data }))
      .catch((err) => res.status(400).send({ err: err.message }));
  },
};

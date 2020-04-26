const userController = require('./controllers/users');
const discussionsController = require('./controllers/discussions');

module.exports = (router) => {
  router.get('/', (req, res) => res.status(200).send({
    'Welcome to': 'Townie!',
  }));

  // users
  router.get('/user', userController.GetUser);
  router.post('/login', userController.Login);
  router.post('/register', userController.Register);

  // discussion
  router.post('/discussions', discussionsController.GetDiscussionPosts);
  router.post('/createDiscussion', discussionsController.CreateNewDiscussionPost);
  router.post('/getComments', discussionsController.GetDiscussionComments);
};

// Routes
// - Change password, old password, and new password, user_id PUT
// - Delete account
// - Get Town tag, newsposts_tag, newsposts
// - POST newsposts: title, tagline, text, tags

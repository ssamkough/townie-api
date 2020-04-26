const userController = require('./controllers/users');
const discussionsController = require('./controllers/discussions');
const newspostController = require('./controllers/newspost');

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

  // news post 
  router.post('/newspost', newspostController.GetNewspost);
};

// Routes
// - POST newsposts: title, tagline, text, tags
// - Get Town tag, newsposts_tag, newsposts
// - Change password, old password, and new password, user_id PUT
// - Delete account

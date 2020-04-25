const userController = require('./controllers/users');

module.exports = (router) => {
  router.get('/user', userController.GetUser);
};

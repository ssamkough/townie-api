const userController = require('./controllers/users');

module.exports = (router) => {
  router.get('/', (req, res) => {
  	return res.status(200).send({
  		"Welcome to": "Townie!"
  	})
  })

  router.get('/user', userController.GetUser);
  router.post('/login', userController.Login);
  router.post('/register', userController.Register);
};

const Router = require('express').Router();
const LoginController = require('../Controllers/LoginController');

Router.get('/list', LoginController.listUser);
Router.post('/userById', LoginController.userById);
Router.post('/add', LoginController.addUser);

module.exports = Router;
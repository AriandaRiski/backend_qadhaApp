const Routers = require('express').Router();
const middleware = require('./../Middleware/middleware');
const puasa = require('./puasa');
const login = require('./login');

Routers.use('/puasa' , puasa);
Routers.use('/auth/login' , login);

module.exports = Routers;
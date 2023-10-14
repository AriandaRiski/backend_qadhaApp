const Routers = require('express').Router();
const puasa = require('./puasa');
const login = require('./login');

Routers.use('/puasa' , puasa);
Routers.use('/auth/login' , login);

module.exports = Routers;
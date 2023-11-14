const Routers = require('express').Router();
const middleware = require('./../Middleware/middleware');
const login = require('./login');
const puasa = require('./puasa');
const shalat = require('./shalat');

Routers.use('/auth/login', login);
Routers.use('/puasa', middleware.cekLogin , puasa);
Routers.use('/shalat', shalat);

module.exports = Routers;
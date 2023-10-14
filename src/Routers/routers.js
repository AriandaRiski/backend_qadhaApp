const Routers = require('express').Router();
const puasa = require('./puasa');

Routers.use('/puasa' , puasa);

module.exports = Routers;
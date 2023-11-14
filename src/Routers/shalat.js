const Router = require('express').Router();
const ShalatController = require('../Controllers/ShalatController');
// const PuasaValidation = require('../Controllers/Validations/PuasaValidation');

Router.get('/list', ShalatController.listShalat);
Router.post('/listShalat', ShalatController.listShalatByUser);
Router.post('/add', ShalatController.tambah);
Router.delete('/hapus/:id', ShalatController.hapus)

module.exports = Router;
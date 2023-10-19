const Router = require('express').Router();
const PuasaController = require('../Controllers/PuasaController');
const PuasaValidation = require('../Controllers/Validations/PuasaValidation');

Router.get('/list', PuasaController.listPuasa);
Router.post('/listpuasa', PuasaController.listPuasaByUser);
Router.post('/add', PuasaValidation.validasiTambah, PuasaController.tambah);
Router.put('/edit/:id', PuasaController.update)
Router.delete('/hapus/:id', PuasaController.hapus)

module.exports = Router;
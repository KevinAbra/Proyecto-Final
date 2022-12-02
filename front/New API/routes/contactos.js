const contactoController = require('../controllers/contactoController');
const router = require('express').Router();
router.get('/', (req, res) => {
    contactoController.listar(req, res)
})
router.get('/:idUser', (req, res) => {
    contactoController.buscar(req, res)
})
router.post('/', (req, res) => {
    contactoController.create(req, res)
})
router.delete('/:idUser', (req, res) => {
    contactoController.borrar(req, res)
})
module.exports = router
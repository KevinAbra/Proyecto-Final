const router = require('express').Router();
router.get('/:idProduct', (req, res) => {
    let respuesta = {
        tipo: 20,
        msg: "buscando un solo producto ",
        id: req.params.idProduct
    }
    res.json(respuesta)
})
router.get('/', (req, res) => {
    let respuesta = {
        tipo: 20,
        msg: "buscando un solo producto ",
        id: req.params.idProduct
    }
    res.json(respuesta)
})
router.post('/', (req, res) => {
    console.log(req.body)
    let respuesta = {
        tipo: 20,
        msg: 'producto por medio de un post',
    }
    res.json(respuesta)
})


module.exports = router
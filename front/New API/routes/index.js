let router=require('express').Router();
let clientes=require('./clientes');
router.use('/clientes',clientes);
let contactos=require('./contactos');
router.use('/contactos',contactos);

router.get('/',(req,res)=>{
    res.status(200).json({tipo:200, msg:'Conectando a API'})
});
module.exports=router
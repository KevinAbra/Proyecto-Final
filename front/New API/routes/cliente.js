let router=require('express').Router()

router.get('/',(req,res)=>{
    let respuesta={tipo:20, msg:'Listado de todos los clientes'}
    res.json(respuesta);
});

router.get('/:idUser',(req,res)=>{
    console.log(req.params.idUser);
    let respuesta={tipo:20, msg:'Buscando un solo cliente',id:req.params.idUser}
    res.json(respuesta);
});
router.post('/',(req,res)=>{
    console.log(req.body)
  let respuesta={tipo:220, msg:'resultado de un post'};
  res.json(respuesta);
});
router.put('/:idUser',(req,res)=>{
    res.json({tipo:220, msg:'resultado de un put'});
});

module.exports=router
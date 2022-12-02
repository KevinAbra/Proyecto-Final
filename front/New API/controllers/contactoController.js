let mysql = require('../db/mysql')
module.exports = {
    create: (req, res) => {
        mysql.query("insert into contacto set?",req.body,(error, results, fields) => {
            if (error)
                res.json(error)
            else {
                res.json({ tipo: 200, msg: "se ha agregado correctamente" })
            }
        })
    },
    listar: (req, res) => {
        mysql.query("select * from contacto ", (error, results, fields) => {
            if (error)
                res.json(error)
            else {
                console.log(results)
                res.json(results)
            }
        });
    },
    buscar: (req, res) => {
        mysql.query(`select * from contacto where id=${req.params.idUser}`, (error, results, fields) => {
            if (error)
                res.json(error)
            else {
                console.log(results)
                res.json(results)
            }
        });
    },
    borrar: (req, res) => {
        mysql.query(`delete  from contacto where id=${req.params.idUser}`, (error, results, fields) => {
            if (error)
                res.json(error)
            else {
                let respuesta = {
                    tipo: 200,
                    msg: "se a eliminado correctamente"
                }
                res.json(respuesta)
            }
        })
    }
}
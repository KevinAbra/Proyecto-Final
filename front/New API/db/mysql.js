const mysql = require('../node_modules/mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'proyecto'
});
mysqlConnection.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('se establecio correctamente la conexion')
    }
})
module.exports = mysqlConnection;
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'https://databases.000webhost.com/',
    user: 'id18686503_lmar',
    password: 'Lmar123456789$',
    database: 'id18686503_seguridadlmar'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
    }else{
        console.log('Db is Connected');
    }
});

module.exports = mysqlConnection;
const mysql = require('mysql');

//mysql://bb52a68e76d5f8:c47cb4d7@us-cdbr-east-05.cleardb.net/heroku_455f6a3a73aa829?reconnect=true
const mysqlConnection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'bb52a68e76d5f8',
    password: 'c47cb4d7',
    database: 'heroku_455f6a3a73aa829'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
    }else{
        console.log('Db is Connected');
    }
});

module.exports = mysqlConnection;
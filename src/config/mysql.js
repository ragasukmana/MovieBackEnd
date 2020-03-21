const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'movie'
})

connection.connect((error) => {
    if(error) throw error
    console.log("You are connected...");
})

module.exports = connection
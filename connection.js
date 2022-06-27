const mysql = require('mysql2');
require('dotenv').config();

// Connection deets
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});

// Create connection 
connection.connect((err) => {
    if (!err) {
        console.log("Database connected sucessfully..")
    } else {
        console.log("Error in connecting to database..")
    }
})

module.exports = connection;
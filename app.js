const express = require('express');
const app = express();
const mysqlConnection = require('./connection');

// Get people by id API 
app.get('/getPeople', (req, res) => {
    const id = req.query.id
        // const query = `SELECT * FROM persons WHERE PersonId = ${id}`;
    const query = `SELECT * FROM persons WHERE PersonId = ?`;
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.status(200)
                .send(rows)
        } else {
            console.log(err)
            res.status(400)
                .send(fields)
        }
    })
})

// get people by age == 29 and input city
app.get("/getByCityAndAge", (req, res) => {
    const city = req.query.city
        // const query = `SELECT * FROM persons WHERE city = ${city} AND Age = 29`;
    const query = `SELECT * FROM persons WHERE city = ? AND Age = 29`;
    mysqlConnection.query(query, [city], (err, rows, fields) => {
        if (!err) {
            res.status(200)
                .send(rows)
        } else {
            console.log(err)
            res.status(400)
                .json({ message: "Please send ip in correct format" })
        }
    })
})



// 
app.listen(3000, () => {
    console.log("Server is running at port 3000..")
})
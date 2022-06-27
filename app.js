const express = require('express');
const app = express();
const mysqlConnection = require('./connection');

app.get('/getPeople', (req, res) => {
    const query = `SELECT * FROM persons `;
    mysqlConnection.query(query, (err, rows, fields) => {
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

app.listen(3000, () => {
    console.log("Server is running at port 3000..")
})
// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Elizabethliay@2090',
    database: 'juadb' // Change this to your database name
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

// Routes

// Example route to retrieve grades
app.get('/grades', (req, res) => {
    db.query('SELECT * FROM user_grades', (err, results) => {
        if (err) {
            console.error('Error fetching grades:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
});

// Example route to handle signup
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    // Example query to insert data into the signup_requests table
    const sql = 'INSERT INTO signup_requests (username, email, password) VALUES (?, ?, ?)';
    const values = [username, email, password];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error signing up:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        console.log('Signup successful');
        res.send('Signup successful');
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port 3000`);
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// MySQL database configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fintech'
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

app.use(bodyParser.json());

app.listen(8081, () => {
    console.log('Server is running on port ${PORT}');
});

// POST endpoint to store data in tmemptype table
app.post('/api/tmemptype', (req, res) => {
    const { empType, empTypeDesc } = req.body;

    // Insert data into the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('INSERT INTO tmemptype (empType, empTypeDesc) VALUES (?, ?)', [empType, empTypeDesc], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error storing data in tmemptype table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data stored successfully' });
        });
    });
});

// GET endpoint to retrieve data from tmemptype table
app.get('/api/tmemptype', (req, res) => {
    // Fetch data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT emptypeid,empType,empTypeDesc FROM tmemptype', (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving data from tmemptype table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});

// API endpoint to store company type data
app.post('/api/companytype', (req, res) => {
    const { cType } = req.body;

    // Insert data into the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('INSERT INTO tmcompanytype (cType) VALUES (?)', [cType], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error storing company type data:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Company type data stored successfully' });
        });
    });
});

// API endpoint to retrieve company type data
app.get('/api/companytype', (req, res) => {
    // Retrieve data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT ctypeid,cType FROM tmcompanytype', (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving company type data:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});

// API endpoint to store business nature data
app.post('/api/businessnature', (req, res) => {
    const { bn } = req.body;

    // Insert data into the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('INSERT INTO tmbusinessnature (bn) VALUES (?)', [bn], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error storing business nature data:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Business nature data stored successfully' });
        });
    });
});

// API endpoint to retrieve business nature data
app.get('/api/businessnature', (req, res) => {
    // Retrieve data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT bnid,bn FROM tmbusinessnature', (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving business nature data:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});
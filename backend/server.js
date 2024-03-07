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

// Read endpoint to retrieve data from tmemptype table
app.get('/api/tmemptype/:emptypeid', (req, res) => {
    const emptypeid = req.params.emptypeid;
    // Fetch data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT * from  tmemptype WHERE emptypeid = ?', [emptypeid], (error, results, fields) => {
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

// API endpoint to update data in emp type table
app.put('/api/updatetmemptype/:emptypeid', (req, res) => {
    const emptypeid = req.params.emptypeid;
    const { emptype, emptypedesc } = req.body;

    // Update data in the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('UPDATE tmemptype SET emptype = ?, emptypedesc = ? WHERE emptypeid = ?', [emptype, emptypedesc, emptypeid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error updating data in tmemptype table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data updated successfully' });
        });
    });
});

// API endpoint to delete data from emp type table
app.delete('/api/deletetmemptype/:emptypeid', (req, res) => {
    const emptypeid = req.params.emptypeid;

    // Delete data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('DELETE FROM tmemptype WHERE emptypeid = ?', [emptypeid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error deleting data from tmemptype table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data deleted successfully' });
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

// API endpoint to store industry type data
app.post('/api/industrytype', (req, res) => {
    const { it } = req.body;

    // Insert data into the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('INSERT INTO tmindustrytype (it) VALUES (?)', [it], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error storing industry type data:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Industry type data stored successfully' });
        });
    });
});

// API endpoint to retrieve industry type data
app.get('/api/industrytype', (req, res) => {
    // Retrieve data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT itid,it FROM tmindustrytype', (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving industry type data:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});

// API endpoint to store collateral type data
app.post('/api/collateraltype', (req, res) => {
    const { ct } = req.body;

    // Insert data into the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('INSERT INTO tmcollateraltype (ct) VALUES (?)', [ct], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error storing collateral type data:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Collateral type data stored successfully' });
        });
    });
});

// API endpoint to retrieve collateral type data
app.get('/api/collateraltype', (req, res) => {
    // Retrieve data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT ctid,ct FROM tmcollateraltype', (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving collateral type data:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});

// API endpoint to store document type data
app.post('/api/doctype', (req, res) => {
    const { doctype } = req.body;

    // Insert data into the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('INSERT INTO tmdoctype (doctype) VALUES (?)', [doctype], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error storing document type data:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Document type data stored successfully' });
        });
    });
});

// API endpoint to retrieve document type data
app.get('/api/doctype', (req, res) => {
    // Retrieve data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT docid,doctype FROM tmdoctype', (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving document type data:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});

// API endpoint to store bank data
app.post('/api/bank', (req, res) => {
    const { bname } = req.body;

    // Insert data into the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('INSERT INTO tmbank (bname) VALUES (?)', [bname], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error storing bank data:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Bank data stored successfully' });
        });
    });
});

// API endpoint to retrieve bank data
app.get('/api/bank', (req, res) => {
    // Retrieve data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT bid,bname FROM tmbank', (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving bank data:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});

// API endpoint to store data consent
app.post('/api/dataconsent', (req, res) => {
    const { tdatac } = req.body;

    // Insert data into the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('INSERT INTO tmdataconsent (tdatac) VALUES (?)', [tdatac], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error storing data consent:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data consent stored successfully' });
        });
    });
});

// API endpoint to retrieve data consent
app.get('/api/dataconsent', (req, res) => {
    // Retrieve data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT tdatacid,tdatac FROM tmdataconsent', (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving data consent:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});
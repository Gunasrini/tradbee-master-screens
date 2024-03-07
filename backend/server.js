const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const router = express.Router()
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

// Read endpoint to retrieve data from tmcompanytype table
app.get('/api/tmcompanytype/:ctypeid', (req, res) => {
    const ctypeid = req.params.ctypeid;
    // Fetch data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT * from  tmcompanytype WHERE ctypeid = ?', [ctypeid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving data from tmcompanytype table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});

// API endpoint to update data in company type table
app.put('/api/updatetmcompanytype/:ctypeid', (req, res) => {
    const ctypeid = req.params.ctypeid;
    const { ctype } = req.body;

    // Update data in the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('UPDATE tmcompanytype SET ctype = ? WHERE ctypeid = ?', [ctype, ctypeid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error updating data in tmcompanytype table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data updated successfully' });
        });
    });
});



// API endpoint to delete data from company type table
app.delete('/api/deletetmcompanytype/:ctypeid', (req, res) => {
    const ctypeid = req.params.ctypeid;

    // Delete data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('DELETE FROM tmcompanytype WHERE ctypeid = ?', [ctypeid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error deleting data from tmcompanytype table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data deleted successfully' });
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

// API to fetch one data in tmbusinessnature table based on bnid
app.get('/api/tmbusinessnature/:bnid', (req, res) => {
    const bnid = req.params.bnid;
    // Fetch data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT * from  tmbusinessnature WHERE bnid = ?', [bnid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving data from tmbusinessnature table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});

// API endpoint to update data in business nature table
app.put('/api/updatetmbusinessnature/:bnid', (req, res) => {
    const bnid = req.params.bnid;
    const { bn } = req.body;

    // Update data in the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('UPDATE tmbusinessnature SET bn = ? WHERE bnid = ?', [bn, bnid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error updating data in tmbusinessnature table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data updated successfully' });
        });
    });
});

// API endpoint to delete data from business nature table
app.delete('/api/deletetmbusinessnature/:bnid', (req, res) => {
    const bnid = req.params.bnid;

    // Delete data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('DELETE FROM tmbusinessnature WHERE bnid = ?', [bnid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error deleting data from tmbusinessnature table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data deleted successfully' });
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

// API to fetch one data in tmindustrytype table based on itid
app.get('/api/tmindustrytype/:itid', (req, res) => {
    const itid = req.params.itid;
    // Fetch data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT * from  tmindustrytype WHERE itid = ?', [itid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving data from tmindustrytype table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});

// API endpoint to update data in industry type table
app.put('/api/updatetmindustrytype/:itid', (req, res) => {
    const itid = req.params.itid;
    const { it } = req.body;

    // Update data in the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('UPDATE tmindustrytype SET it = ? WHERE itid = ?', [it, itid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error updating data in tmindustrytype table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data updated successfully' });
        });
    });
});

// API endpoint to delete data from industry type table
app.delete('/api/deletetmindustrytype/:itid', (req, res) => {
    const itid = req.params.itid;

    // Delete data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('DELETE FROM tmindustrytype WHERE itid = ?', [itid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error deleting data from tmindustrytype table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data deleted successfully' });
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

// API to fetch one data in tmcollateraltype table based on ctid
app.get('/api/tmcollateraltype/:ctid', (req, res) => {
    const ctid = req.params.ctid;
    // Fetch data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT * from  tmcollateraltype WHERE ctid = ?', [ctid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving data from tmcollateraltype table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});

// API endpoint to update data in collateral type table
app.put('/api/updatetmcollateraltype/:ctid', (req, res) => {
    const ctid = req.params.ctid;
    const { ct } = req.body;

    // Update data in the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('UPDATE tmcollateraltype SET ct = ? WHERE ctid = ?', [ct, ctid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error updating data in tmcollateraltype table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data updated successfully' });
        });
    });
});

// API endpoint to delete data from collateral type table
app.delete('/api/deletetmcollateraltype/:ctid', (req, res) => {
    const ctid = req.params.ctid;

    // Delete data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('DELETE FROM tmcollateraltype WHERE ctid = ?', [ctid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error deleting data from tmcollateraltype table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data deleted successfully' });
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

// API to fetch one data in tmdoctype table based on docid
app.get('/api/tmdoctype/:docid', (req, res) => {
    const docid = req.params.docid;
    // Fetch data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT * from  tmdoctype WHERE docid = ?', [docid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving data from tmdoctype table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});

// API endpoint to update data in doc type table
app.put('/api/updatetmdoctype/:docid', (req, res) => {
    const docid = req.params.docid;
    const { doctype } = req.body;

    // Update data in the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('UPDATE tmdoctype SET doctype = ? WHERE docid = ?', [doctype, docid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error updating data in tmdoctype table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data updated successfully' });
        });
    });
});

// API endpoint to delete data from doc type table
app.delete('/api/deletetmdoctype/:docid', (req, res) => {
    const docid = req.params.docid;

    // Delete data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('DELETE FROM tmdoctype WHERE docid = ?', [docid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error deleting data from tmdoctype table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data deleted successfully' });
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

// API to fetch one data in tmbank table based on bid
app.get('/api/tmbank/:bid', (req, res) => {
    const bid = req.params.bid;
    // Fetch data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT * from  tmbank WHERE bid = ?', [bid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving data from tmbank table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});

// API endpoint to update data in bank table
app.put('/api/updatetmbank/:bid', (req, res) => {
    const bid = req.params.bid;
    const { bname } = req.body;

    // Update data in the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('UPDATE tmbank SET bname = ? WHERE bid = ?', [bname, bid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error updating data in tmbank table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data updated successfully' });
        });
    });
});

// API endpoint to delete data from bank table
app.delete('/api/deletetmbank/:bid', (req, res) => {
    const bid = req.params.bid;

    // Delete data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('DELETE FROM tmbank WHERE bid = ?', [bid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error deleting data from tmbank table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data deleted successfully' });
        });
    });
});

// API endpoint to store relation data
app.post('/api/relation', (req, res) => {
    const { relatin } = req.body;

    // Insert data into the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('INSERT INTO tmrelation (relatin) VALUES (?)', [relatin], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error storing relation data:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Relation data stored successfully' });
        });
    });
});

// API endpoint to retrieve relation data
app.get('/api/relation', (req, res) => {
    // Retrieve data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT relid,relatin FROM tmrelation', (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving relation data:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});

// API to fetch one data in tmrelation table based on relid
app.get('/api/tmrelation/:relid', (req, res) => {
    const relid = req.params.relid;
    // Fetch data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT * from  tmrelation WHERE relid = ?', [relid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving data from tmrelation table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});

// API endpoint to update data in relation table
app.put('/api/updatetmrelation/:relid', (req, res) => {
    const relid = req.params.relid;
    const { relatin } = req.body;

    // Update data in the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('UPDATE tmrelation SET relatin = ? WHERE relid = ?', [relatin, relid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error updating data in tmrelation table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data updated successfully' });
        });
    });
});

// API endpoint to delete data from relation table
app.delete('/api/deletetmrelation/:relid', (req, res) => {
    const relid = req.params.relid;

    // Delete data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('DELETE FROM tmrelation WHERE relid = ?', [relid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error deleting data from tmrelation table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data deleted successfully' });
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

// API to fetch one data in tmdataconsent table based on tdatacid
app.get('/api/tmdataconsent/:tdatacid', (req, res) => {
    const tdatacid = req.params.tdatacid;
    // Fetch data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('SELECT * from  tmdataconsent WHERE tdatacid = ?', [tdatacid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error retrieving data from tmdataconsent table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});

// API endpoint to update data in data consent table
app.put('/api/updatetmdataconsent/:tdatacid', (req, res) => {
    const tdatacid = req.params.tdatacid;
    const { tdatac } = req.body;

    // Update data in the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('UPDATE tmdataconsent SET tdatac = ? WHERE tdatacid = ?', [tdatac, tdatacid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error updating data in tmdataconsent table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data updated successfully' });
        });
    });
});

// API endpoint to delete data from data consent table
app.delete('/api/deletetmdataconsent/:tdatacid', (req, res) => {
    const tdatacid = req.params.tdatacid;

    // Delete data from the database
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Use the connection
        connection.query('DELETE FROM tmdataconsent WHERE tdatacid = ?', [tdatacid], (error, results, fields) => {
            // When done with the connection, release it
            connection.release();

            if (error) {
                console.error('Error deleting data from tmdataconsent table:', error);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.status(200).json({ message: 'Data deleted successfully' });
        });
    });
});
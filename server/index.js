const keys = require('./keys');

// Express setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an express() object and configure
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres client setup
const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});
pgClient.on('error', () => console.log('Lost PG Connection'));

// Create a table in Postgres to store the indices
pgClient.on('connect', () => {
    pgClient
        .query('CREATE TABLE IF NOT EXISTS values (number INT)')
        .catch(err => console.log(err));
})

// Redis client setup
const redis = require('redis');
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});
const redisPublisher = redisClient.duplicate();

// End point for test
app.get('/', (req, res) => {
    res.send('Hi');
});

// End point to retrieve indices from Postgres database
app.get('/values/all', async (req, res) => {
    const values = await pgClient.query('SELECT * from values');
    res.send(values.rows);
});

// End point to retrieve indices and the corresponding Fibonacci values from Redis
app.get('/values/current', async (req, res) => {
    redisClient.hgetall('values', (err, values) => {
        res.send(values);
    });
});

// Endpoint to Send the index entered by user from frontend to backend 
app.post('/values', (req, res) => {
    
    // Get the index
    const index = req.body.index;

    // Put a cap on Fibonacci after a certain index
    if (parseInt(index) > 40) {
        return res.status(422).send('INDEX TOO HIGH!');
    }

    // Initialize an entry for the index with default value in Redis
    redisClient.hset('values', index, '0');
    redisPublisher.publish('insert', index);

    // Insert the index to Postgres
    pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);

    // Send a busy message
    res.send({ working: true });
});

// Listen to port 5000
app.listen(5000, err => {
    console.log('LISTENING TO 5000');
});
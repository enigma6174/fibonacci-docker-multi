const keys = require('./keys');
const redis = require('redis');

// Create the redis client
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPORT,
    retry_strategy: () => 1000
});

// Create a copy of the redis client
const sub = redisClient.duplicate();

// Calculate the Fibonacci value for the n-th index
function fib(index) {
    if (index < 2) return 1;
    return fib(index - 1) + fib(index - 2);
}

// Everytime a new value is inserted into redis, we have to calculate the fibonacci value for that index and update the index with the new value
sub.on('message', (channel, message) => {
    redisClient.hset('values', message, fib(parseInt(message)));
});

// Trigger the above event when an insertion is made to redis datanase
sub.subscribe('insert');
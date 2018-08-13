const fs = require('fs');
const bus = require('servicebus').bus({
    user: process.env.RABBITMQ_USER,
    password: process.env.RABBITMQ_PASS,
    host: process.env.RABBITMQ_HOST,
});

fs


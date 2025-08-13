// src/app.js
const express = require('express');
const cors = require('cors');
const logger = require('./config/logger');
const routes = require('./routes');
const errorHandler = require('./middlewares/error.middleware');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Middleware to log requests with status & response time
app.use((req, res, next) => {
    const startHrTime = process.hrtime();

    res.on('finish', () => {
        const elapsedHrTime = process.hrtime(startHrTime);
        const elapsedMs = (elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6).toFixed(2);

        logger.info(`${req.method} ${req.originalUrl} ${res.statusCode} - ${elapsedMs}ms - IP: ${req.ip}`);
    });

    next();
});

// Routes
app.use('/api', routes);

// Error handler
app.use(errorHandler);


module.exports = app;

const express = require('express');
const router = express.Router();

// const userRoutes = require('./user.routes');
// const productRoutes = require('./product.routes');

const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

// router.use('/users', userRoutes);
// router.use('/products', productRoutes);

router.get('/ping', (req, res) => {
    res.status(200).json({ 
        message: 'API is working ✅',
        requestedAt: new Date().toISOString()
     });
});


module.exports = router;
// This file serves as the main entry point for all API routes.
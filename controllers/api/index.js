// TODO: Import dependencies, including all /api routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const shirtRoutes = require('./shirtRoutes');
const cartRoutes = require('./cartRoutes');

// TODO: Add 'router.use' for all /api routes
router.use('/users', userRoutes);
router.use('/shirts', shirtRoutes);
router.use('/cart', cartRoutes)

module.exports = router;

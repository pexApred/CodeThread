// TODO: Import dependencies, including all /api routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const shirtRoutes = require('./shirtRoutes');

// TODO: Add 'router.use' for all /api routes
router.use('/users', userRoutes);
router.use('/shirts', shirtRoutes);


module.exports = router;

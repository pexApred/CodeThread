const router = require('express').Router();
const userRoutes = require('./userRoutes');
const shirtRoutes = require('./shirtRoutes');

router.use('/users', userRoutes);
router.use('/shirts', shirtRoutes);


module.exports = router;

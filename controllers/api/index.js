const router = require('express').Router();
const userRoutes = require('./userRoutes');
const coinRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/coins', coinRoutes);

module.exports = router;

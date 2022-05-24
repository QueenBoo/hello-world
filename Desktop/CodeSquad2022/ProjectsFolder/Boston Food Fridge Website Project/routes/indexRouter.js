const express = require('express');
const siteRoutes = require('./site-routes');
const adminRoutes = require('./admin-routes');
const router = express.Router();

router.use('/', siteRoutes);
router.use('/admin', adminRoutes);

module.exports = router;


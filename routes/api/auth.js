const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Test route
// @aceess  Public
router.get('/',(req, res) => res.send('Auth route'));

module.exports = router;
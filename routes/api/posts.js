const express = require('express');
const router = express.Router();

// @route   GET api/posts
// @desc    Test route
// @aceess  Public
router.get('/',(req, res) => res.send('Posts route'));

module.exports = router;
const express = require('express');
const router = new express.Router();

router.use('/films', require('./films_controller.js'));
router.use('/books', require('./books_controller.js'));

module.exports = router;

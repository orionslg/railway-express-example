const express = require('express');
const router = express.Router();

const { bookController } = require('../controllers');

// get all books
router.get('/books', bookController.getBooks);
router.post('/books', bookController.createBook);

module.exports = router;

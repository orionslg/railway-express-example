const express = require('express');
const router = express.Router();

// get all books
router.get('/books', (req, res) => {
  res.send('Hello');
});

module.exports = router;

const { bookService } = require('../services');

async function getBooks(req, res) {
  const books = await bookService.getBooks();

  res.send(books);
}

async function createBook(req, res) {
  const book = {
    ...req.body
  };

  await bookService.createBook(book);

  res.status(201);
}

module.exports = {
  getBooks,
  createBook
};

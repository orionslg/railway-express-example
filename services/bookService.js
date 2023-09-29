const { prisma } = require('../config/prisma');

async function getBooks() {
  try {
    const books = await prisma.book.findMany();

    return books;
  } catch (error) {
    throw new Error();
  }
}

async function createBook(book) {
  try {
    const mappedBook = {
      data: {
        title: book.title,
        author: book.Author
      }
    }
    await prisma.book.create(mappedBook);
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}

module.exports = {
  getBooks,
  createBook
};

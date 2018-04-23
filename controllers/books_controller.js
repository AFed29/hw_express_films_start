const express = require('express');
const BooksData = require('../data/books_data.js');
const booksData = new BooksData();

const booksRouter = new express.Router();

booksRouter.get('/', function (req, res) {
  const allBooks = booksData.all();
  res.json({ books: allBooks });
});

booksRouter.get('/:id', function (req, res) {
  const index = req.params.id;
  const book = booksData.find(index);
  res.json({ book: book });
});

booksRouter.post('/', function (req, res) {
  const newBook = req.body.book;
  booksData.add(newBook);
  res.json({ books: booksData.all() })
});

booksRouter.put('/:id', function (req, res) {
  const newBook = req.body.book;
  const index = req.params.id;
  booksData.update(index, newBook);
  res.json({ books: booksData.all() })
});

booksRouter.delete('/:id', function (req, res) {
  const index = req.params.id;
  booksData.delete(index);
  res.json({ books: booksData.all() })
});

module.exports = booksRouter;

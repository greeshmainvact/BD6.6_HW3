const express = require('express');
const cors = require('cors');
const { getAllBooks, getBookById } = require('./controllers');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/books', async (req, res) => {
  const books = getAllBooks();
  res.status(200).json({ books });
});

app.get('/books/details/:id', async (req, res) => {
  const book = getBookById(parseInt(req.params.id));
  res.status(200).json({ book });
});

module.exports = { app };

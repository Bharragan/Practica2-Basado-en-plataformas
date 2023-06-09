const Book = require('../models/book');

// Controlador para obtener un libro por su ID
exports.getBookById = (req, res) => {
  const bookId = req.params.id;

  Book.findById(bookId)
    .then(book => {
      if (!book) {
        return res.status(404).json({ error: 'Libro no encontrado' });
      }

      res.json(book);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error al obtener el libro de la base de datos' });
    });
};

// Controlador para obtener todos los libros
exports.getAllBooks = (req, res) => {
  Book.find()
    .then(books => {
      res.json(books);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error al obtener los libros de la base de datos' });
    });
};


// Controlador para crear un libro
exports.createBook = (req, res) => {
  const { bookCode, bookName, bookDescription } = req.body;

  const newBook = new Book({
    bookCode,
    bookName,
    bookDescription
  });

  newBook.save()
    .then(book => {
      res.status(201).json(book);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error al guardar el libro en la base de datos' });
    });
};


const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Ruta para obtener todos los libros
router.get('/', bookController.getAllBooks);

// Ruta para obtener un libro por su ID
router.get('/:id', bookController.getBookById);

// Ruta para crear un libro
router.post('/', bookController.createBook);


module.exports = router;

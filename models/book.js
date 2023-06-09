const mongoose = require('mongoose');

// Definición del esquema
const bookSchema = new mongoose.Schema({
  bookCode: {
    type: String,
    required: true
  },
  bookName: {
    type: String,
    required: true
  },
  bookDescription: {
    type: String,
    required: true
  }
});

// Creación del modelo 'Book' basado en el esquema
const Book = mongoose.model('Book', bookSchema);

// Exportar el modelo
module.exports = Book;

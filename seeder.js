const Book = require('./models/book');
const User = require('./models/user');

async function seedDatabase() {
  try {
    // Crear libros de ejemplo
    const book1 = await Book.create({
      bookCode: '001',
      bookName: 'El resplandor',
      bookDescription: 'Novela de terror escrita por Stephen King.',
    });

    const book2 = await Book.create({
      bookCode: '002',
      bookName: 'Indigno de ser humano',
      bookDescription: 'Novela de suspense escrita por Osamu Dazai.',
    });

    const book3 = await Book.create({
      bookCode: '003',
      bookName: 'Crimen y castigo',
      bookDescription: 'Novela clásica escrita por Fyodor Dostoyevsky.',
    });

    // Crear usuarios de ejemplo
    const user1 = await User.create({
      code: '001',
      name: 'Michael Jackson',
      faculty: 'Artes Escénicas',
      reservas: [
        { book: book1._id, reserved_at: new Date() },
        { book: book2._id, reserved_at: new Date() },
      ],
    });

    const user2 = await User.create({
      code: '002',
      name: 'Kurt Cobain',
      faculty: 'Música',
      reservas: [
        { book: book2._id, reserved_at: new Date() },
      ],
    });

    const user3 = await User.create({
      code: '003',
      name: 'Slash',
      faculty: 'Artes Visuales',
      reservas: [
        { book: book1._id, reserved_at: new Date() },
        { book: book3._id, reserved_at: new Date() },
      ],
    });

    console.log('Datos de ejemplo insertados correctamente.');
  } catch (error) {
    console.error('Error al insertar datos de ejemplo:', error);
  }
}

module.exports = seedDatabase;

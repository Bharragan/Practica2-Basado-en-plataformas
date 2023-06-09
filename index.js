const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const endpointRoutes = require('./routes/endpointsRoutes');
const seedDatabase = require('./seeder');

const app = express();
const PORT = config.port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ...

mongoose.connect(config.mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
    seedDatabase(); // Llamar al seeder después de la conexión exitosa a la base de datos
  })
  .catch(error => {
    console.error('Error al conectar a MongoDB:', error);
  });

app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/endp', endpointRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

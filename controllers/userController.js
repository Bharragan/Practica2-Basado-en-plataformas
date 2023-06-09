const User = require('../models/user');


// Controlador para crear un usuario
exports.createUser = (req, res) => {
    const { code, name, faculty, reservas } = req.body;
  
    const newUser = new User({
      code,
      name,
      faculty,
      reservas
    });
  
    newUser
      .save()
      .then(user => {
        res.status(201).json(user);
      })
      .catch(err => {
        res.status(500).json({ error: 'Error al crear el usuario en la base de datos' });
      });
  };
  

// Controlador para eliminar un usuario por su ID
exports.deleteUserById = (req, res) => {
  const userId = req.params.id;

  User.findByIdAndDelete(userId)
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      res.json({ message: 'Usuario eliminado correctamente' });
    })
    .catch(err => {
      res.status(500).json({ error: 'Error al eliminar el usuario de la base de datos' });
    });
};
// Controlador para actualizar un usuario por su ID
exports.updateUserById = (req, res) => {
  const userId = req.params.id;
  const { code, name, faculty, reservas } = req.body;

  User.findByIdAndUpdate(userId, { code, name, faculty, reservas }, { new: true })
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      res.json(user);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error al actualizar el usuario en la base de datos' });
    });
};

// Controlador para obtener un usuario por su ID
exports.getUserById = (req, res) => {
  const userId = req.params.id;

  User.findById(userId)
    .populate('reservas.book') // Poblamos el campo 'book' dentro del array 'reservas' para obtener los detalles del libro
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      res.json(user);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error al obtener el usuario de la base de datos' });
    });
};

// Controlador para obtener todos los usuarios
exports.getAllUsers = (req, res) => {
  User.find()
    .populate('reservas.book') // Poblamos el campo 'book' dentro del array 'reservas' para obtener los detalles del libro
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error al obtener los usuarios de la base de datos' });
    });
};

// Controlador para obtener todas las reservas de un usuario por su ID
exports.getUserReservations = (req, res) => {
  const userId = req.params.id;

  User.findById(userId)
    .populate('reservas.book') // Poblamos el campo 'book' dentro del array 'reservas' para obtener los detalles del libro
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      res.json(user.reservas);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error al obtener las reservas del usuario' });
    });
};

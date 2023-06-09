const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Ruta para crear un usuario
router.post('/',userController.createUser);

//Ruta para eliminar un usuario con id
router.delete('/:id',userController.deleteUserById);

//Ruta para actualizar un usuario con su id
router.put('/:id',userController.updateUserById);

//ruta para obtener un usuario con id
router.get('/:id',userController.getUserById);

//Ruta para obtener todos los usuarios
router.get('/',userController.getAllUsers);

//Ruta para obtener las reservas de un usuario
router.get('/reservas/:id',userController.getUserReservations);

module.exports = router;

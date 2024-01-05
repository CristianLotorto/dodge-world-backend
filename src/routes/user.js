const express = require('express');

const router = express.Router();

const controllerUser = require('../controllers/user');

router
  .put('/:id', controllerUser.updateUser)
  .get('/', controllerUser.getAllUser)
  .get('/:id', controllerUser.getUserById)
  .post('/', controllerUser.createUser)
  .delete('/:id', controllerUser.deleteUser);

module.exports = router;

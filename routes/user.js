const express = require("express");
const { getLogin } = require("../controllers/usersController");
const router = express.Router();
const usersController = require('../controllers/usersController');
const userValidator = require('../validations/uservalidation');
const jwtToken=require('../validations/jwtvalidation');
router.get('/user', jwtToken.validateToken,userValidator.id,usersController.getUser);
router.get('/users', jwtToken.validateToken,usersController.getUsers);
router.post('/user', userValidator.add, usersController.postUser);
router.put('/user', userValidator.update,usersController.putUser);
router.delete('/user', userValidator.id,usersController.deleteUser);
router.post("/login",userValidator.id,usersController.getLogin);

module.exports = router;
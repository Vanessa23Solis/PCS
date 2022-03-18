const express = require("express");
const router = express.Router();
const petsController = require('../controllers/petsController');
const petValidator = require("../validations/petValidation");
router.get('/pet', petValidator.id,petsController.getPet);
router.get('/pets', petsController.getPets);
router.post('/pet', petValidator.add,petValidator.add, petsController.postPet);
router.put('/pet', petValidator.update,petsController.putPet);
router.delete('/pet', petValidator.id,petsController.deletePet);

module.exports = router;
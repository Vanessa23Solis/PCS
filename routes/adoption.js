const express = require("express");
const router = express.Router();
const adoptionsController = require('../controllers/adoptionsController');
const adoptionValidation = require('../validations/adoptionValidation');
router.get('/adoption', adoptionValidation.id,adoptionsController.getAdoption);
router.get('/adoptions', adoptionsController.getAdoptions);
router.post('/adoption', adoptionValidation.add,adoptionsController.postAdoption);
router.put('/adoption', adoptionValidation.update,adoptionsController.putAdoption);
router.delete('/adoption', adoptionValidation.id,adoptionsController.deleteAdoption);
router.get('/adoptionUser', adoptionsController.getAdoptionByUser);

module.exports = router;



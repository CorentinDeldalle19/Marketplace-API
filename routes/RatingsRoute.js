const express = require('express');
const RatingController = require('../controllers/Ratings');
const AuthController = require('../controllers/authController');

const router = express.Router();

// Routes pour les évaluations
router.post('/', AuthController, RatingController.createRating);
router.get('/', AuthController, RatingController.getRatings);
router.get('/:id', AuthController, RatingController.getRatingByID);
router.put('/:id', AuthController, RatingController.updateRating);
router.delete('/:id', AuthController, RatingController.deleteRating);

module.exports = router;
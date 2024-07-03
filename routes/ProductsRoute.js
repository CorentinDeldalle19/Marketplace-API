const express = require('express');
const ProductController = require('../controllers/Products');
const AuthController = require('../controllers/authController');

const router = express.Router();

// Routes pour les produits
router.post('/', AuthController, ProductController.createProduct);
router.get('/', AuthController, ProductController.getProducts);
router.get('/:id', AuthController, ProductController.getProductById);
router.put('/:id', AuthController, ProductController.updateProduct);
router.delete('/:id', AuthController, ProductController.deleteProduct);

module.exports = router;
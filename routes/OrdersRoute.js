const express = require('express');
const OrderController = require('../controllers/Order')
const AuthController = require('../controllers/authController');

const router = express.Router();

// Routes pour les produits
router.post('/', AuthController, OrderController.createOrder);
router.get('/', AuthController, OrderController.getOrders);
router.get('/:id', AuthController, OrderController.getOrderByID);
router.put('/:id', AuthController, OrderController.updateOrder);
router.delete('/:id', AuthController, OrderController.deleteOrder);

module.exports = router;
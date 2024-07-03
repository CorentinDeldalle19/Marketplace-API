const express = require('express');
const UserController = require('../controllers/User')
const AuthController = require('../controllers/authController');

const router = express.Router();

// Validation
const validateUser = [
    body('name').isString().withMessage('Name must be a string'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6}).withMessage('Password must be at least 6 characters long')
]

const validateUserId = [
    param('id').isUUID().withMessage('Invalid user ID')
];

// Routes pour les utilisateurs
router.post('/', AuthController, validateUser, UserController.createUser);
router.get('/', AuthController, UserController.getUsers);
router.get('/:id', AuthController, validateUserId, UserController.getUserById);
router.put('/:id', AuthController, [...validateUserId, ...validateUser], UserController.updateUser);
router.delete('/:id', AuthController, validateUserId, UserController.deleteUser);

module.exports = router;
// api/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');  // Importamos el controlador

// Ruta para el login
router.post('/login', login); 

module.exports = router;

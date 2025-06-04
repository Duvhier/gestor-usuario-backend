const express = require('express');
const router = express.Router();
const { crearRol, obtenerRoles } = require('../controllers/rolesController');

router.post('/', crearRol);
router.get('/', obtenerRoles);

module.exports = router;
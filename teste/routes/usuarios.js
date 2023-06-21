const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/inserir', usuarioController.cadastrar);
router.post('/entrar', usuarioController.entrar);
router.get('/listar', usuarioController.listar);
router.get('/count', usuarioController.count);

module.exports = router;

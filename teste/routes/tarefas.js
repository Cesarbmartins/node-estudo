const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.post('/tarefa/cadastrar', tarefaController.cadastrarTarefa);
router.get('/tarefa/listar', tarefaController.listarTarefas);

module.exports = router;
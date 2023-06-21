const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.post('/tarefa/cadastrar', tarefaController.cadastrarTarefa);
router.get('/tarefa/listar', tarefaController.listarTarefas);
router.put('/tarefa/editar/:id', tarefaController.editar);
router.put('/tarefa/concluir/:id', tarefaController.concluirTarefa);
router.delete('/tarefa/deletar/:id', tarefaController.deletarTarefa);
        
module.exports = router;
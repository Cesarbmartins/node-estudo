const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.post('/cadastrar', tarefaController.cadastrarTarefa);
router.get('/listar', tarefaController.listarTarefas);
router.put('/editar/:id', tarefaController.editar);
router.put('/concluir/:id', tarefaController.concluirTarefa);
router.delete('/deletar/:id', tarefaController.deletarTarefa);
router.get('/listarConcluidas', tarefaController.listarConcluidas);
router.get('/listarNaoConcluidas', tarefaController.listarNaoConcluidas);
router.get('/listarTarefasPorUsuario/:id', tarefaController.listarTarefasPorUsuario);
router.get('/listarTarefasAgrupadaPorUsuarios', tarefaController.listarTarefasAgrupadaPorUsuarios);
router.get('/listarTarefasPorUsuarioConcluidas/:id', tarefaController.listarTarefasPorUsuarioConcluidas);
router.put('/atribuirTarefa/:id', tarefaController.atribuirTarefa);
router.put('/atribuirDataLimite/:id', tarefaController.atribuirDataLimite);

        
module.exports = router;
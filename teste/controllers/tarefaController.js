const tarefaModel = require("../models/tarefaModel");

var cadastrarTarefa = function (req, res) {
    const dados = req.body;
    tarefaModel.cadastrarTarefa(dados, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao cadastrar tarefa!');
        } else {
            res.redirect('/tarefa/listar');
        }
    });
}

var listarTarefas = function (req, res) {
    tarefaModel.listarTarefas(function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao listar tarefas!');
        } else {
            console.log(result)
        }
    });
}

var concluirTarefa = function(req, res){
    const id = req.params.id;
    const data = req.body.data;
    tarefaModel.concluirTarefa(id,data, function(err, result){
         if(err) {
            console.log(err);
            res.status(500).send('Erro ao concluir tarefa!');
         } else {
            res.send('/tarefa/listar');
         }
    })
}

var deletarTarefa = function (req, res) {
    const id = req.params.id;
    tarefaModel.deletarTarefa(id, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao excluir tarefa!');
        } else {
            res.redirect('/tarefa/listar');
        }
    });
}

module.exports = {
    cadastrarTarefa,
    listarTarefas,
    concluirTarefa,
    deletarTarefa
}

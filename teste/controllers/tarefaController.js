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
            console.log('Alterado com sucesso!')
            res.send('/tarefa/listar');
         }
    });
}

var editar = function(req,res){
    const id = req.params.id;
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    tarefaModel.editar(id, nome, descricao, function(err, result){
       if(err){
        console.log(err);
        res.status(500).send('Erro ao editar a tarefa!');
       } else {
        res.send('/tarefa/listar');
       }
    });
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
    deletarTarefa,
    editar
}

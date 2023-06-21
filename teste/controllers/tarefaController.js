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
            res.render('tarefa/listar', { tarefas: result });
        }
    });
}

module.exports = {
    cadastrarTarefa,
    listarTarefas
}

const tarefaModel = require("../models/tarefaModel");
const usuarioModel = require("../models/usuarioModel");

const cadastrarTarefa = function (req, res) {
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const data = req.body.data;
    const data_limite = req.body.data_limite;
    const responsavel = req.body.responsavel;
        
    tarefaModel.cadastrarTarefa(nome, descricao, data_limite,data, responsavel, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao cadastrar tarefa!');
        } else {
            res.redirect('/tarefa/listar');
            res.status(200);
        }
    });
}

const atribuirTarefa = function (req, res) {
    const id = req.params.id;
    const responsavel = req.body.responsavel;
    tarefaModel.atribuirTarefa(id, responsavel, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao atribuir tarefa!');
        } else {
            res.redirect('/tarefa/listar');
            res.status(200);
        }
    });
}

const listarTarefas = function (req, res) {
    tarefaModel.listarTarefas(function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao listar tarefas!');
        } else {
            console.log(result)
            res.status(200).json(result);

        }
    });
}

const concluirTarefa = function (req, res) {
    const id = req.params.id;
    const data = req.body.data;
    tarefaModel.concluirTarefa(id, data, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao concluir tarefa!');
        } else {
            console.log('Alterado com sucesso!')
            res.redirect('/tarefa/listar');
            res.status(200);
        }
    });
}

const editar = function (req, res) {
    const id = req.params.id;
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    tarefaModel.editar(id, nome, descricao, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao editar a tarefa!');
        } else {
            res.redirect('/tarefa/listar');
            res.status(200);
        }
    });
}

const deletarTarefa = function (req, res) {
    const id = req.params.id;
    tarefaModel.deletarTarefa(id, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao excluir tarefa!');
        } else {
            res.redirect('/tarefa/listar');
            res.status(200);
        }
    });
}

const listarConcluidas = function (req, res) {
    tarefaModel.listarConcluidas(function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao exibir!');
        } else {
            res.status(200).json(result)
        }
    })
}

const listarNaoConcluidas = function (req, res) {
    tarefaModel.listarNaoConcluidas(function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao exibir!');
        } else {
            res.status(200).json(result)
        }
    })
}

const listarTarefasPorUsuario = function (req, res) {
    const id = req.params.id;

    tarefaModel.listarTarefasPorUsuario(id, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao exibir!');
        } else {
            res.status(200).json(result)
        }
    })
}

const listarTarefasNaoConcluidasUsuario = function (req, res) {
    const id = req.params.id;

    tarefaModel.listarTarefasNaoConcluidasUsuario(id, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao exibir!');
        } else {
            res.status(200).json(result)
        }
    })
}

const listarTarefasPorUsuarioConcluidas = function (req, res) {
    const id = req.params.id;

    tarefaModel.listarTarefasPorUsuarioConcluidas(id, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao exibir');
        } else {
            res.status(200).json(result)
        }
    })
}

const listarTarefasAgrupadaPorUsuarios = function (req, res) {
    tarefaModel.listarTarefasAgrupadaPorUsuarios(function (err, result) {

        if (err) {
            console.log(err);
            res.status(500).send('Erro ao exibir');
        } else {
            res.status(200).json(result)
        }
    })
}

const atribuirDataLimite = function (req, res) {
    const id = req.params.id;
    const data_limite = req.body.data_limite;
    tarefaModel.atribuirDataLimite(id,data_limite,function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao atribuir a data')
        } else {
            res.status(200)
            res.redirect('/tarefa/listar')
        }
    })
}

module.exports = {
    cadastrarTarefa,
    editar,
    listarTarefas,
    concluirTarefa,
    deletarTarefa,
    listarConcluidas,
    listarNaoConcluidas,
    atribuirTarefa,
    listarTarefasPorUsuario,
    listarTarefasNaoConcluidasUsuario,
    listarTarefasPorUsuarioConcluidas,
    listarTarefasAgrupadaPorUsuarios,
    atribuirDataLimite
}

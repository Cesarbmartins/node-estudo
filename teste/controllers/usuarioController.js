const usuarioModel = require('../models/usuarioModel');


const cadastrar = function (req, res) {
    const dados = req.body.dados;
    usuarioModel.cadastrar(dados, (err, results) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.status(200).json({ message: 'Dados inseridos com sucesso' });
    });
}

const entrar = function (req, res) {
    const dados = req.body.dados;
    usuarioModel.entrar(dados, (err, results) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        if (results.length == 0) {
            res.status(400).json({ error: 'Usuário não encontrado' });
            return;
        }
        const usuario = {
            nome: results[0].nome,
            email: results[0].email
        }
        res.status(200).json(usuario);
    });
}

const listar = function (req, res) {
    usuarioModel.listar((err, results) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.status(200).json(results);
    });
}

const count = function (req, res) {
    usuarioModel.count((err, results) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.status(200).json(results);
    });
}

module.exports = {
    cadastrar,
    entrar,
    listar,
    count
}
const connection = require('../models/db');

var cadastrar = function (req, res) {
    const dados = req.body.dados;
    const nome = dados.nome;
    const email = dados.email;
    const senha = dados.senha;

    const sql = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(sql, [nome, email, senha], (err, results) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.status(200).json({ message: 'Dados inseridos com sucesso' });
    });
}

var entrar = function (req, res) {
    const dados = req.body.dados;
    const email = dados.email;
    const senha = dados.senha;

    const sql = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
    connection.query(sql, [email, senha], (err, results) => {
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

var listar = function (req, res) {
    const sql = 'SELECT * FROM usuario';
    connection.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.status(200).json(results);
    });
}

var count = function (req, res) {
    const sql = 'SELECT COUNT(*) AS total FROM usuario';
    connection.query(sql, (err, results) => {
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
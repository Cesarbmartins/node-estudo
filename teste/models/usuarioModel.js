const connection = require('./db');

var cadastrar = function (dados, callback) {
    
    const nome = dados.nome;
    const email = dados.email;
    const senha = dados.senha;

    const sql = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(sql, [nome, email, senha], callback);
}

var entrar = function (dados, callback) {
    const email = dados.email;
    const senha = dados.senha;

    const sql = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
    connection.query(sql, [email, senha], callback)
}

var listar = function (callback) {
    const sql = 'SELECT * FROM usuario';
    connection.query(sql,callback)
}

var count = function (callback) {
    const sql = 'SELECT COUNT(*) AS total FROM usuario';
    connection.query(sql, callback);
}

module.exports = {
    cadastrar,
    entrar,
    listar,
    count
}
const connection = require('./db');

const cadastrar = function (nome,email,senha, callback) {
    const sql = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(sql, [nome, email, senha], callback);
}

const verificarEmailExistente = function(email,callback) {
    const sql = 'SELECT  * FROM usuario WHERE email = ? '
    connection.query(sql,[email],callback);
}

const entrar = function (dados, callback) {
    const email = dados.email;
    const senha = dados.senha;

    const sql = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
    connection.query(sql, [email, senha], callback)
}

const listar = function (callback) {
    const sql = 'SELECT * FROM usuario';
    connection.query(sql,callback)
}

const count = function (callback) {
    const sql = 'SELECT COUNT(*) AS total FROM usuario';
    connection.query(sql, callback);
}

module.exports = {
    cadastrar,
    entrar,
    listar,
    count,
    verificarEmailExistente
}
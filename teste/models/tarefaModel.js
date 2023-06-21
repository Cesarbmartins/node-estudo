const connection = require('./db');

var cadastrarTarefa = function (dados, callback) {
    const nome = dados.nome;
    const descricao = dados.descricao;
    const data = dados.data;

    const sql = 'INSERT INTO tarefa (nome, descricao, data) VALUES (?, ?, ?)';
    connection.query(sql, [nome, descricao, data], callback);
}

var listarTarefas = function (callback) {
   const sql = 'SELECT * FROM tarefa';
   connection.query(sql, callback);
}

module.exports = {
    cadastrarTarefa,
    listarTarefas
}
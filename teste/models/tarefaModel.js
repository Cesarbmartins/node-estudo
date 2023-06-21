const connection = require('./db');

var cadastrarTarefa = function (dados, callback) {
    const nome = dados.nome;
    const descricao = dados.descricao;
    const data = dados.data;

    const sql = 'INSERT INTO tarefa (nome, descricao, data_conclusao) VALUES (?, ?, ?)';
    connection.query(sql, [nome, descricao, data], callback);
}

var listarTarefas = function (callback) {
    const sql = 'SELECT * FROM tarefa';
    connection.query(sql, callback);
}

var editar = function (id, nome, descricao, callback) {
    const sql = 'UPDATE tarefa set nome = ?, descricao = ? WHERE id = ?';
    connection.query(sql, [nome, descricao, id,callback]);
}

var concluirTarefa = function (id, data, callback) {
    const sql = 'UPDATE tarefa SET data_conclusao = ? WHERE id = ?';
    connection.query(sql, [data, id], callback)
}

var deletarTarefa = function (id, callback) {
    const sql = 'DELETE FROM tarefa WHERE id = ?';
    connection.query(sql, [id], callback);
}

module.exports = {
    cadastrarTarefa,
    listarTarefas,
    concluirTarefa,
    deletarTarefa,
    editar
}
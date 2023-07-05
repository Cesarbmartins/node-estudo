const { atribuirTarefa } = require('../controllers/tarefaController');
const connection = require('./db');

  
 
 const cadastrarTarefa = function (nome, descricao, data, responsavel, callback) {
    const sql = 'INSERT INTO tarefa (nome, descricao, data_conclusao, responsavel) VALUES (?, ?, ?)';
    connection.query(sql, [nome, descricao, data,responsavel], callback);
}

const listarTarefas = function (callback) {
    const sql = 'SELECT * FROM tarefa';
    connection.query(sql, callback);
}

const atribuirTarefa = function (id, responsavel, callback) {
    const sql = 'UPDATE tarefa SET responsavel = ? WHERE id = ?';
    connection.query(sql, [responsavel, id], callback);
}

const editar = function (id, nome, descricao, callback) {
    const sql = 'UPDATE tarefa set nome = ?, descricao = ? WHERE id = ?';
    connection.query(sql, [nome, descricao, id,callback]);
}

const concluirTarefa = function (id, data, callback) {
    const sql = 'UPDATE tarefa SET data_conclusao = ? WHERE id = ?';
    connection.query(sql, [data, id], callback)
}

const deletarTarefa = function (id, callback) {
    const sql = 'DELETE FROM tarefa WHERE id = ?';
    connection.query(sql, [id], callback);
}

const listarConcluidas = function(callback){
    const sql = 'SELECT * FROM tarefa WHERE data_conclusao IS NOT NULL';
    connection.query(sql, callback);
}

const listarNaoConcluidas = function(callback){
    const sql = 'SELECT * FROM tarefa WHERE data_conclusao IS NULL';
    connection.query(sql, callback);
}

const listarTarefasPorUsuario = function(id, callback){
    const sql = 'SELECT * FROM tarefa WHERE responsavel = ?';
    connection.query(sql, [id], callback);
}

const listarTarefasAgrupadaPorUsuarios = function(callback){
    const sql = 'SELECT * FROM tarefa group by responsavel';
    connection.query(sql, callback);
}

const listarTarefasPorUsuarioConcluidas = function (id,callback){
    const sql = 'SELECT * FROM tarefa WHERE responsavel = ? AND data_conclusao IS NOT NULL';
    connection.query(sql, [id], callback);
}

module.exports = {
    cadastrarTarefa,
    listarTarefas,
    concluirTarefa,
    deletarTarefa,
    editar,
    listarConcluidas,
    listarNaoConcluidas,
    atribuirTarefa,
    listarTarefasPorUsuario,
    listarTarefasAgrupadaPorUsuarios,
    listarTarefasPorUsuarioConcluidas
}
const controllers = require('../controllers/tarefaController');
const connection = require('./db');

  
 const cadastrarTarefa = function (nome, descricao,data_limite ,data, responsavel, callback) {
    const sql = 'INSERT INTO tarefa (nome, descricao, data_limite,data_conclusao, responsavel) VALUES (?,?,?,?,?)';
    connection.query(sql, [nome, descricao,data_limite ,data,responsavel], callback);
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
    const sql = 'SELECT * FROM tarefa JOIN usuario on responsavel = usuario.id WHERE responsavel = ?';
    connection.query(sql, [id], callback);
}

const listarTarefasAgrupadaPorUsuarios = function(callback){
    const sql = 'SELECT tarefa.nome as NomeTarefa,descricao,usuario.nome as Responsavel,data_limite,data_conclusao FROM tarefa join usuario on usuario.id = tarefa.responsavel GROUP BY tarefa.nome,usuario.nome,data_limite,descricao,data_conclusao';
    connection.query(sql, callback);
}

const listarTarefasPorUsuarioConcluidas = function (id,callback){
    const sql = 'SELECT tarefa.nome,usuario.nome,tarefa.data_conclusao FROM tarefa WHERE responsavel = ? AND data_conclusao IS NOT NULL';
    connection.query(sql, [id], callback);
}

const atribuirDataLimite = function (id,data_limite,callback){
      const sql =  'UPDATE tarefa SET data_limite = ? where id = ?'
      connection.query(sql,[data_limite,id],callback)
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
    listarTarefasPorUsuarioConcluidas,
    atribuirDataLimite
}
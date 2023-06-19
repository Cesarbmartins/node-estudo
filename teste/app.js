const mysql = require('mysql2');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sccp1910@',
  database: 'estudonode'
});

app.post('/inserir', cors(), (req, res) => {
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
});

app.post('/entrar', cors(), (req, res) => {
  const dados = req.body.dados;
  const email = dados.email;
  const senha = dados.senha;
  
  const sql = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
  connection.query(sql, [email, senha], (err, results) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(200).json(results);
  });
});

app.get('/listar', (req, res) => {
    const sql = 'SELECT * FROM usuario';
    connection.query(sql, (err, results) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.status(200).json(results);
    });
  });

app.listen(8080, function(){
  console.log("Servidor rodando na url http://10.18.7.17:8080");
});

module.exports = app;

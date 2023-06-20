const express = require('express');
const router =  express.Router();
const connection = require('./db');

router.post('/inserir', (req, res) => {
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

  router.post('/entrar', (req, res) => {
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
  
  router.get('/listar', (req, res) => {
      const sql = 'SELECT * FROM usuario';
      connection.query(sql, (err, results) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        res.status(200).json(results);
      });
    });

    module.exports = router;
  
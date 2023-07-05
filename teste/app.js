const express = require('express');
const app = express();
const cors = require('cors');
const usuarioRoutes = require('./routes/usuarios');
const tarefaRoutes = require('./routes/tarefas');


app.use(express.json());
app.use(cors());
app.use("/usuario", usuarioRoutes);
app.use("/tarefa", tarefaRoutes);

app.listen(8080, function(){
  console.log("Servidor rodando na url http://10.18.7.17:8080");
});

module.exports = app;

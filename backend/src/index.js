/**
 * importar pacotes para o node
 * sintaxe: const (nome-da-variavel) = require('(nome-do-modulo)')
*/

/**
 * Nodemon é um pacote npm que pode ser usado para reiniciar o servidor 
 * automaticamente sempre que houver mudanças no codigo da aplicação.
 * comando: npm install nodemon
 * após instalar basta criar um script em package.json
 * script: "start": "modemon index.js" 
*/

//express é um micro framework que contem funcionalidades para ajudar na codificação
const express = require('express');
const routes = require('./routes');

//cors é um modulo que define que pode acessar o backend
const cors = require('cors');
const app = express();

//informr para converter o corpo de requisições para um objeto javaScript
app.use(cors());
app.use(express.json());
app.use(routes);

//definir a porta de rede onde o backend ira escutar por requisições
app.listen(3333);

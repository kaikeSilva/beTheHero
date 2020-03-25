/**
 * importar pacotes para o node
 * sintaxe: const (nome-da-variavel) = require('(nome-do-modulo)')
*/

//express é um micro framework que contem funcionalidades para ajudar na codificação
const express = require('express');
const app = express();

//criar rota que retorne uma resposta
app.get('/', (request,response) => {
    return response.json({
        evento: 'semana omni stack',
        aluno: 'kaike batista da silva'
    });
});


//definir a porta de rede onde o backend ira escutar por requisições
app.listen(3333);

const express = require('express');
const OngController = require('./controllers/OngController');

const routes = express.Router();
/**
 * metodos HTTP:
 * 
 * GET: buscar/listar
 * POST: criar uma informação
 * PUT: alterar informação
 * DELETE: deletar informação
 * 
 * tipos de parametros:
 * 
 * Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 *              são acessados pelo metodo query do objeto request
 * Route Params: Parãmetros utilizados para identificar recursos
 *              são acessados pelo metodo params do objeto request
 * Request Body: Corpo da requisição, utilizado para criar ou alterar um usuário
 *              são acessados pelo metodo body do objeto request
*/

/**
 * Banco de dados
 * 
 * SQLite - A abordagem utilizada será a de query builder
 * O query builder utilizado é o KNEX que deve ser instalado na aplicação
 * comando: npm install knex --save
 * O banco de dados utilizado sera o SQLite, que tambem deve ser instalado
 * comando: npm install SQLite3
*/

//rota para listar ongs
routes.get('/ongs', OngController.index);

//rota para criar uma nova ong
routes.post('/ongs', OngController.create);

//exportar variável rotas
module.exports = routes;
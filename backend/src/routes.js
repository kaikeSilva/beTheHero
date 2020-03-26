const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

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



/**
 * ROTAS PARA SESSÃO
*/
//rota para criar uma nova ong
routes.post('/sessions', SessionController.create);

/**
 * ROTAS PARA ONGS
*/
//rota para listar ongs
routes.get('/ongs', OngController.index);
//rota para criar uma nova ong
routes.post('/ongs', OngController.create);

/**
 * ROTAS PARA INCIDENTS
*/
//rota para criar um novo incidente
routes.post('/incidents', IncidentController.create);
//rota para listar todos os incidentes
routes.get('/incidents', IncidentController.index);
//rota para listar todos os incidentes
routes.delete('/incidents/:id', IncidentController.delete);

/**
 * ROTAS PARA PROFILE
*/
//retornar listagem de incidentes da ong autorizada
routes.get('/profile', ProfileController.index);

//exportar variável rotas
module.exports = routes;
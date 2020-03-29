const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    //metodo para listar ongs
    async index(request,response) {
        //fazer paginação
        const {page = 1} = request.query;

        //quantidade todal de incidentes
        const [count] = await connection('incidents').count();

        //o total de itens por padrao é retornado no cabeçalho da resposta
        response.header('X-Total-Count', count['count(*)']);

        //cada página tem um limite de 5, offset é para buscar pelo número da página
        const incidents = await connection('incidents')
            .join('ongs','ongs.id','=','incidents.ong_id')
            .limit(20)
            .offset((page -1) * 5)
            .select([
                    'incidents.*',
                    'ongs.name',
                    'ongs.email',
                    'ongs.whatsapp',
                    'ongs.city',
                    'ongs.uf'
                ]);
        console.log(response.header());
        //retornar o id para para a ong
        return response.json(incidents);
    },
    //metodo para criar ong
    async create(request,response) {
    
        //definir os dados na entrada garante que não seja guardado nenhum dado indevido
        const  { title, description, value, } = request.body;

        //obter atraves do cabeçalho da requisição o id da ong autenticada
        const ong_id = request.headers.authorization;

        /**
         * O retorno é um array contendo o id inserido
         * pode-se fazer essa atribuição com a notação entre colchetes 
         * [valor] = array[0], o valor assim recebe a primeira posição do array
         * */
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        //retornar o id para para a ong
        return response.json({id});
    },
    //metodo para deletar ong
    async delete(request,response) {

        const  {id} = request.params;
        const ong_id = request.headers.authorization;

        //verificar se o incidente pertence a ong autorizada
        const incident = await connection('incidents')
            .where('id',id)
            .select('ong_id')
            .first();

                
        if (incident.ong_id != ong_id) {
            return response.status(401).json({error: 'operation not permited'});
        }

        //deletar o incidente
        await connection('incidents').where('id',id).delete();
        return response.status(204).send();
    }
}
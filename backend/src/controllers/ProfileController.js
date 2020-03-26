const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    //metodo lista de incidents relacionadas a ong autenticada
    async index(request,response) {
        
        const  ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id',ong_id)
            .select('*');
        
            return response.json(incidents);
        
    }
}
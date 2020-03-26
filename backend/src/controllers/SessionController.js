const connection = require('../database/connection');

module.exports = {
    //criar um objeto de sessao contendo a ong autorizada
    async create(request,response) {
        const {id} = request.body;

        //buscar pelo nome da ong e retornar se existir
        const ong = await connection('ongs')
            .where('id',id)
            .select('name')
            .first();

        if(!ong) {
            return response.status(400).json({error: 'No ong find'})
        }

        return response.json({ong});
    }
}
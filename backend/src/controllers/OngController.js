const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    //metodo para listar ongs
    async index(request,response) {
        //definir os dados na entrada garante que não seja guardado nenhum dado indevido
        const  ongs = await connection('ongs').select('*');

        //retornar o id para para a ong
        return response.json(ongs);
    },
    //metodo para criar ong
    async create(request,response) {
    
        //definir os dados na entrada garante que não seja guardado nenhum dado indevido
        const  { name,email,whatsapp,city,uf } = request.body;

        //criar o id da ong, quatro bytes de caracteres hexadecimais
        const id = crypto.randomBytes(4).toString('HEX');

        /**
         * inserir os dados
         * como a inserção pode demorar, devemos sinalizar para o codigo esperar.
         * await: espera esse trecho ser excutado antes de seguir
         * obs: só pode ser usado em funções assincronas
         * */ 
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        //retornar o id para para a ong
        return response.json({id});
    }
}
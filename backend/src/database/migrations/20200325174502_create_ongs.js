/**
 * migrations s~]ao estruturas para criação de tabelas
 * up: metodo que cria a tabela
 * down: metodso que destroi a tabela
 * comando: npx knex migrate:make create_ongs
 * 
 * apos inserir os campos da tabela, para migrar para o banco de dados
 * comando: npx knex migrate:latest
 * 
 * se necessario desfazer alguma migration
 * comando: npx knex migrate:rollback
*/
exports.up = function(knex) {
    return knex.schema.createTable("ongs", function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
        table.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schena.dropTable("ongs");
};

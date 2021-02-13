import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('pessoasr', table => {
        table.increments('id').primary();
        table.integer('CPF').notNullable();
        table.string('nome').notNullable();
        table.date('data_nascimento').notNullable();
        table.integer('telefone', 15).notNullable();
        table.string('email').notNullable();
        table.integer('id_cliente', 10).unsigned().notNullable();
        table.foreign('id_cliente')
            .references('clientes.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTableIfExists('pessoasr');
}
import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('clientes', table => {
        table.increments('id').primary();
        table.integer('CNPJ', 14).notNullable();
        table.string('nome').notNullable();
        table.date('data_fundacao').notNullable();
        table.string('tipo', 7).notNullable();
        table.integer('telefone', 15).notNullable();
        table.string('email').notNullable();
        table.integer('CEP', 8).notNullable();
        table.string('logradouro').notNullable();
        table.integer('numero').notNullable();
        table.string('bairro').notNullable();
        table.string('cidade').notNullable();
        table.string('estado').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTableIfExists('clientes');
}
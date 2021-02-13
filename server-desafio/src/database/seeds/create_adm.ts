import Knex from "knex";

export async function seed(knex:Knex) {
    await knex('adm').insert(
        {
            nome: 'Admin',
            email: 'admin@exemple.com',
            senha: 'admin'
        }
    );
}
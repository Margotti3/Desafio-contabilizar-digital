import { Request, Response } from 'express';
import knex from '../database/connection';

interface Pessoa {
    CPF: string;
    nome: string;
    data_nascimento: string;
    telefone: string;
    email: string;
    id_cliente: string;
}

class ClientsController {
    async index(request: Request, response: Response) {
        const clients = await knex('clientes')
            .select('id', 'nome', 'data_fundacao', 'email', 'telefone', 'CNPJ', 'tipo')
            .orderBy('id', 'desc');
    
        return response.json(clients);
    }

    async show(request: Request, response: Response) {
        const id = request.params.id;

        const client = await knex('clientes')
            .select('*')
            .where('id', '=', id)
            .first();
    
        return response.json(client);
    }
    
    async showAll(request: Request, response: Response) {
        const id = request.params.id;

        const client = await knex('clientes')
            .select('*')
            .where('id', '=', id)
            .first();

        const related = await knex('pessoasr')
            .select('*')
            .where('id_cliente', '=', id)
            .orderBy('nome');
    
        return response.json({ client, related});
    }
    
    async create(request: Request, response: Response) {
        const {
            nome,
            CNPJ,
            email,
            data_fundacao,
            tipo,
            telefone,
            CEP,
            logradouro,
            numero,
            bairro,
            cidade,
            estado,
            pessoasRelacionadas
        } = request.body;

        const trx = await knex.transaction();

        const idClient = await trx('clientes').insert({
            nome,
            CNPJ,
            email,
            data_fundacao,
            tipo,
            telefone,
            CEP,
            logradouro,
            numero,
            bairro,
            cidade,
            estado
        });
    
        // precisa refazer
        const pessoasInsertion = pessoasRelacionadas.map((pessoa: Pessoa) => {
            return {
                ...pessoa,
                id_cliente: idClient[0],
            }
        });

        await trx('pessoasr').insert(pessoasInsertion);

        await trx.commit();
        
        return response.json(pessoasInsertion);
    }
    
    async edit(request: Request, response: Response) {
        const id = request.params.id;
        const client = await knex('clientes')
            .where('id', '=', id)
            .update(request.body);
    
        return response.json(client);
    }
    
    async delete(request: Request, response: Response) {
        const id = request.params.id;
        await knex('clientes').where('id', '=', id).del();
        return response.json({massage: "Hello Word"});
    }
}

export default ClientsController;
import { Request, Response } from 'express';
import knex from '../database/connection';

class PessoasrController {
    async show(request: Request, response: Response) {
        const id = request.params.id;
        const related = await knex('pessoasr')
            .select('*')
            .where('id', '=', id)
            .orderBy('nome')
            .first();
    
        return response.json(related);
    }
    
    async create(request: Request, response: Response) {
        await knex('pessoasr').insert(request.body);
    
        return response.json({massage: "Hello Word"});
    }
    
    async edit(request: Request, response: Response) {
        const id = request.params.id;
        const client = await knex('pessoasr')
            .where('id', '=', id)
            .update(request.body);
    
        return response.json({massage: "Hello Word"});
    }
    
    async delete(request: Request, response: Response) {
        const id = request.params.id;
        await knex('pessoasr').where('id', '=', id).del();
        return response.json({massage: "Hello Word"});
    }
}

export default PessoasrController;
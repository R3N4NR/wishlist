import { Request, Response } from 'express';
import {CreateCartinhaService} from '../../services/Cartinha/CreateCartinhaService'


class CreateCartinhaController{

    async handler(req:Request, res: Response){

        const {nome,endereco, cep, cidade, estado, papainoel_id, pedido_id} = req.body;

        const cartinhaService = new CreateCartinhaService();

        const cartinha = await cartinhaService.execute({
            nome,
            endereco, 
            cep, 
            cidade, 
            estado, 
            papainoel_id, 
            pedido_id
        })

        return res.json(cartinha)
    }
}

export {CreateCartinhaController}
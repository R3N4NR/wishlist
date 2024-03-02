import { Request, Response } from "express";
import { CreatePedidoService } from "../../services/Pedido/CreatePedidoService";

class CreatePedidoController{

    async handler(req: Request, res: Response){

        const {descricao, ano,papainoel_id,rota_id} = req.body;
        const pedidoService = new CreatePedidoService();
        const pedido = await pedidoService.execute({
            descricao, 
            ano,
            papainoel_id,
            rota_id
        })

        return res.json(pedido);

    }
}

export {CreatePedidoController};
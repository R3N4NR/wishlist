import { Request, Response } from "express";
import { ListPedidoByStatusService } from "../../services/Pedido/ListPedidoByStatusService";

class ListPedidoByStatusController{

    async handler(req: Request, res: Response){
        try{
        const {status} = req.body;
        const pedidoService = new ListPedidoByStatusService();
        const pedido = await pedidoService.execute({
            status
        })
        
        return res.json(pedido)
    }catch(err){
            return res.json(err).status
        }
    }
    
}

export {ListPedidoByStatusController};
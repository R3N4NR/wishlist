import { listError } from "../../errors/listErrors";
import { ListPedidoService } from "../../services/Pedido/ListPedidoService";
import { Response, Request } from "express";


class ListPedidoController{

    async handler(req: Request,res: Response){
        try{
        const pedidoService = new ListPedidoService()
        const listCartinha = await pedidoService.execute()

        return res.json(listCartinha);
    }catch(err){
        listError(err)
        return res.json(err).status
    }
    }
}

export {ListPedidoController};
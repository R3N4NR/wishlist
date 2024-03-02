import { ListPedidoService } from "../../services/Pedido/ListPedidoService";
import { Response, Request } from "express";


class ListPedidoController{

    async handler(req: Request,res: Response){

        const pedidoService = new ListPedidoService()
        const listCartinha = await pedidoService.execute()

        return res.json(listCartinha);
    }
}

export {ListPedidoController};
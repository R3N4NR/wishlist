import { ListPedidoService } from "../../services/Pedido/ListPedidoService";
import { Response } from "express";


class ListPedidoController{

    async handler(res: Response){

        const pedidoService = new ListPedidoService()
        const listCartinha = await pedidoService.execute()

        return res.json(listCartinha);
    }
}

export {ListPedidoController};
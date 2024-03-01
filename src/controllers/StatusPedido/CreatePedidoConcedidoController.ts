import { CreatePedidoStatusService } from "../../services/PedidoConcedido/CreatePedidoStatusService";
import { Request, Response } from "express";

class CreatePedidoStatusController {

    async handler(req: Request, res: Response) {

        const { pedido_id, dados_entrega } = req.body;
        const statusService = new CreatePedidoStatusService();

        const pedidoStatus = await statusService.execute({
            pedido_id, dados_entrega
        })

        return res.json(pedidoStatus)
    }
}

export {CreatePedidoStatusController};
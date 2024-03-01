import { createError } from "../../errors/createErrors";
import { emptyFields } from "../../errors/emptyFields";
import { validateFields } from "../../errors/validateFields";
import prismaClient from "../../prisma/prismaClient";

interface PedidoStatusProps{
    pedido_id: string;
    dados_entrega: string;
}
class CreatePedidoStatusService{

    async execute({pedido_id, dados_entrega}: PedidoStatusProps){
        const fieldEmpty = validateFields(dados_entrega, pedido_id)
        
        if(fieldEmpty){
            emptyFields();
        }
        try{
        const pedidoStatus = await prismaClient.pedidoConcedido.create({
            data: {
                pedido_id: pedido_id,
                dadosEntrega: dados_entrega
            },
            select: {
                pedido_id: true,
                dadosEntrega: true,
            }
        })
        return pedidoStatus
    }catch(err){
        createError(err, 'PedidoConcedido')
    }
    }
}

export {CreatePedidoStatusService}
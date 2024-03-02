import { listError } from "../../errors/listErrors";
import prismaClient from "../../prisma/prismaClient";

interface PedidoProps{
    status: string;
}

class ListPedidoByStatusService{

    async execute({status}: PedidoProps){
        try{
        const pedidos = await prismaClient.pedido.findMany({
            where: {
                status: status
            },
            select:{
                id: true,
                cartinha: true,
                descricao: true,
                rota: true,
                status: true
            }
        })

        return pedidos
    }catch(err){
        listError(err);
    }
    }
}

export {ListPedidoByStatusService};
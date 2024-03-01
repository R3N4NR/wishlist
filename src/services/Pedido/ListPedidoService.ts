import prismaClient from "../../prisma/prismaClient";

class ListPedidoService{

    async execute(){

        const listPedido = await prismaClient.pedido.findMany({
            select:{
                id: true,
                descricao: true,
                ano: true,
                papainoel_id: true,
                rota_id: true,
                
            }
        })

        return listPedido;
    }
}

export {ListPedidoService};
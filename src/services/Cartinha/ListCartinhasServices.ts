import prismaClient from "../../prisma/prismaClient";



class ListCartinhasServices{

    async execute(){

        const listCartinhas = await prismaClient.cartinha.findMany({
            select: {
                id: true,
                nome: true,
                cidade: true,
                endereco: true,
                cep: true,
                estado: true,
                pedido_id: true,
                papainoel_id: true,
            }
        })

        return listCartinhas;
    }
}

export {ListCartinhasServices}
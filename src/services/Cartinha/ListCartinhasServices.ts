import { listError } from "../../errors/listErrors";
import prismaClient from "../../prisma/prismaClient";



class ListCartinhasServices{

    async execute(){
        try{
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
    }catch (err: any) {
        listError(err) // Trate os erros adequadamente.
    }
    }
}

export {ListCartinhasServices}
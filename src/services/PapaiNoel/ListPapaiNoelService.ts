import prismaClient from "../../prisma/prismaClient";


class ListPapaiNoelService{

    async execute(){
        const listPapaiNoel = await prismaClient.papaiNoel.findMany({
            select:{
                id: true,
                nome: true,
                pedidosPendentes: true,
                cartinhas: true,
            }
        })

        return listPapaiNoel
    }
}

export{ListPapaiNoelService}
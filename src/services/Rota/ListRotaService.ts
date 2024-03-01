import prismaClient from "../../prisma/prismaClient";

class ListRotaService{

    async execute(){
        const listRotas = await prismaClient.rota.findMany({
            select:{
                id: true,
                cidade: true
            }
        })

        return listRotas
    }
}

export {ListRotaService};
import { createError } from "../../errors/createErrors";
import prismaClient from "../../prisma/prismaClient";

class ListRotaService{

    async execute(){
        try{
        const listRotas = await prismaClient.rota.findMany({
            select:{
                id: true,
                cidade: true
            }
        })

        return listRotas
    }catch(err){
        createError(err)
        }
    }
}

export {ListRotaService};
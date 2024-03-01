import { createError } from "../../errors/createErrors";
import { emptyFields } from "../../errors/emptyFields";
import { validateFields } from "../../errors/validateFields";
import prismaClient from "../../prisma/prismaClient";

interface PapaiNoelProps{
    nome: string;
}
class CreatePapaiNoelService{

    async execute({nome}: PapaiNoelProps){
        
        const fieldEmpty = validateFields(nome);

        if (fieldEmpty){
            emptyFields();
        }

        try{

            const papainoel = await prismaClient.papaiNoel.create({
                data:{
                    nome: nome
                },
                select:{
                    id: true,
                    nome: true
                }
            })
            return papainoel
        }catch(err){
            createError(err)
        }
    }
}

export {CreatePapaiNoelService};
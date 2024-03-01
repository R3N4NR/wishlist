import { createError } from "../../errors/createErrors";
import { emptyFields } from "../../errors/emptyFields";
import { validateFields } from "../../errors/validateFields";
import prismaClient from "../../prisma/prismaClient";

interface RotaProps{
    cidade: string;
}
class CreateRotaService {

    async execute({cidade}: RotaProps){

        const fieldEmpty = validateFields(cidade);

        if (fieldEmpty){
            emptyFields();
        }

        try{

            const papainoel = await prismaClient.rota.create({
                data:{
                    cidade: cidade
                },
                select:{
                    id: true,
                    cidade: true
                }
            })

            return papainoel;
        }catch(err){
            createError(err)
        }
    }
}

export {CreateRotaService}
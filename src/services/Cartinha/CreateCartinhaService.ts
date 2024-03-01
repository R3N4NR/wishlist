
import { createError } from '../../errors/createErrors';
import { emptyFields } from '../../errors/emptyFields';
import { validateFields } from '../../errors/validateFields';
import prismaClient from '../../prisma/prismaClient'

interface CartinhaProps {

    nome : string;
    endereco: string;
    cep: string;
    cidade: string;
    estado: string;
    pedido_id: string;
    papainoel_id: string;
}

class CreateCartinhaService {

    async execute({nome,endereco, cep, cidade, estado, papainoel_id, pedido_id}: CartinhaProps){

        const fieldEmpty = validateFields(nome,endereco, cep, cidade, estado, papainoel_id, pedido_id)
        
        if(fieldEmpty){
            emptyFields();
        }

        try{

            const cartinha = await prismaClient.cartinha.create({
                data:{
                    nome: nome,
                    endereco: endereco,
                    cep: cep,
                    cidade: cidade,
                    estado: estado,
                    papainoel_id: papainoel_id,
                    pedido_id: pedido_id
                },
                select:{
                    id: true,
                    nome: true,
                    endereco: true,
                    cep: true,
                    cidade: true,
                    estado: true,
                    papainoel_id: true,
                    pedido_id: true

                }
            })

            return cartinha;
        } catch (err){
            createError(err)
        }
    }
}

export  {CreateCartinhaService}
import { createError } from "../../errors/createErrors";
import { emptyFields } from "../../errors/emptyFields";
import { validateFields } from "../../errors/validateFields";
import prismaClient from "../../prisma/prismaClient";

interface PedidoProps{
    descricao: string;
    ano: number;
    rota_id: string;
    papainoel_id: string;
}
class CreatePedidoService {


    async execute({descricao, ano,papainoel_id,rota_id}: PedidoProps){
        const fieldEmpty = validateFields(descricao,ano, rota_id,papainoel_id)
        if(fieldEmpty){
            emptyFields();
        }
        try{
            const pedido = await prismaClient.pedido.create({
                data:{
                    descricao: descricao,
                    ano: ano,
                    papainoel: {
                        connect: {
                            id: papainoel_id,
                        }
                    },
                    rota: {
                        connect:{
                            id: rota_id,
                        }
                    } 
                },
                select:{
                    id: true,
                    descricao: true,
                    ano: true,
                    papainoel_id: true,
                    rota_id: true,
                    status: true,
                }
            })

            return pedido
        }catch(err){
            createError(err, 'pedido', 'pedido')
        }
    }
}

export {CreatePedidoService};
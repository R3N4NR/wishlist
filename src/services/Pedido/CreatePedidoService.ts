import { createError } from "../../errors/createErrors";
import { emptyFields } from "../../errors/emptyFields";
import { validateFields } from "../../errors/validateFields";
import prismaClient from "../../prisma/prismaClient";

interface PedidoProps{
    descricao: string;
    ano: number;
    status: string;
    rota_id: string;
    papainoel_id: string;
}
class CreatePedidoService {


    async execute({descricao, ano, status,papainoel_id,rota_id}: PedidoProps){
        const fieldEmpty = validateFields(descricao,ano, status, rota_id,papainoel_id)
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
                    },
                    status: status
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
            createError(err)
        }
    }
}

export {CreatePedidoService};
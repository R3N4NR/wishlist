import { ListCartinhasServices } from "../../services/Cartinha/ListCartinhasServices";
import { Request, Response } from "express";

class ListCartinhasController{

    async handler(req: Request,res: Response){

        const listCartinhas = new ListCartinhasServices();

        const cartinhas = await listCartinhas.execute();

        return cartinhas;
        
    }
}

export {ListCartinhasController}
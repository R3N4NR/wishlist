import { ListCartinhasServices } from "../../services/Cartinha/ListCartinhasServices";
import { Response } from "express";

class ListCartinhasController{

    async handler(res: Response){

        const listCartinhas = new ListCartinhasServices();

        const cartinhas = await listCartinhas.execute();

        return cartinhas;
        
    }
}

export {ListCartinhasController}
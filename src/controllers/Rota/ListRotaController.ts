import { ListRotaService } from "../../services/Rota/ListRotaService";
import { Response } from "express";


class ListRotaController{

    async handler(res: Response){
         const rotaService = new ListRotaService();
         const rota = await rotaService.execute();

         return res.json(rota)
    }
}

export {ListRotaController}
import { CreateRotaService } from "../../services/Rota/CreateRotaService";
import { Request, Response } from "express";

class CreateRotaController{

    async handler(req: Request, res: Response){

        const {cidade} = req.body;

        const rotaService = new CreateRotaService();

        const rota = await rotaService.execute({cidade});

        return res.json(rota);
    }
}

export {CreateRotaController}
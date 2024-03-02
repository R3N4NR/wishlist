import { ListRotaService } from "../../services/Rota/ListRotaService";
import { Request, Response } from "express";


class ListRotaController{

    async handler(req: Request, res: Response){
        try {
            const rotaService = new ListRotaService();
            const rota = await rotaService.execute();

            return res.json(rota);
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }
}

export {ListRotaController}
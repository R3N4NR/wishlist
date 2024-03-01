import { Request, Response } from "express";
import { CreatePapaiNoelService } from "../../services/PapaiNoel/CreatePapaiNoelService";

class CreatePapaiNoelController{
    async handler(req: Request, res: Response){

        const {nome} = req.body;
        const papaiNoelService = new CreatePapaiNoelService();

        const papaiNoel = await papaiNoelService.execute({
            nome
        })

        return res.json(papaiNoel)
    }
}

export {CreatePapaiNoelController};
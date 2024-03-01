import { Response } from "express";
import { ListPapaiNoelService } from "../../services/PapaiNoel/ListPapaiNoelService";


class ListPapaiNoelController{

    async handler(res: Response){

        const papaiNoelService = new ListPapaiNoelService();

        const papaiNoel = await papaiNoelService.execute();

        return res.json(papaiNoel)
    }
}

export {ListPapaiNoelController};
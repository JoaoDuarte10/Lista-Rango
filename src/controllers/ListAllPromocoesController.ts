import { Request, Response } from 'express'
import { ListAllPromocoesService } from '../services/ListAllPromocoesService'

class ListAllPromocoesController {
    async handle(req: Request, res: Response) {
        const listAllPromocoesService = new ListAllPromocoesService();

        const allPromocoes = await listAllPromocoesService.execute();

        res.json(allPromocoes)
    }
}

export { ListAllPromocoesController }
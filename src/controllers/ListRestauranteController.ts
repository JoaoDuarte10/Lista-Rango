import { Request, Response } from 'express'
import { ListRestauranteService } from '../services/ListRestauranteService'

class ListRestauranteController {
    async handle(req: Request, res: Response) {
        const  { id }  = req.params;

        const listRestauranteService = new ListRestauranteService();

        const listRestaurante = await listRestauranteService.execute(id);
        
        res.json(listRestaurante)
    }
}

export { ListRestauranteController }
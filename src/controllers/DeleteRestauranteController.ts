import { Request, Response } from 'express'
import { DeleteRestauranteService } from '../services/DeleteRestauranteService'

class DeleteRestauranteController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const deleteRestauranteService = new DeleteRestauranteService();

        const deleteRestaurante = await deleteRestauranteService.execute(id);

        res.json(deleteRestaurante);
    }
}

export { DeleteRestauranteController }
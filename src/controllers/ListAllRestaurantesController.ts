import { Request, Response } from 'express'
import { ListAllRestaurantesService } from '../services/ListAllRestaurantesService'

class ListAllRestaurantesController {
    async handle(req: Request, res: Response) {
        const listAllRestaurantesService = new ListAllRestaurantesService();
        const restaurantes = await listAllRestaurantesService.execute();

        res.json(restaurantes)
    }
}

export { ListAllRestaurantesController }
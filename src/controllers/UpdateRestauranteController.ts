import { Request, Response } from 'express'
import { UpdateRestauranteService } from '../services/UpdateRestauranteService'

class UpdateRestauranteController {
    async handle(req: Request, res: Response) {
        const {name, address, hour_open_week, hour_close_week, hour_open_end_week, hour_close_end_week, id} = req.body;

        const updateRestauranteService = new UpdateRestauranteService();

        const updateRestaurante = await updateRestauranteService.execute({
            name, address, hour_open_week, 
            hour_close_week, hour_open_end_week, 
            hour_close_end_week, id
        })

        res.json(updateRestaurante)
    }
}

export { UpdateRestauranteController }
import { Request, Response } from 'express'
import { NewRestauranteService } from '../services/NewRestauranteService'

class NewRestauranteController {
    async handle(req: Request, res: Response) {
        const newRestauranteService = new NewRestauranteService();
        const { name, address, hour_open_week, hour_close_week, hour_open_end_week, hour_close_end_week } = req.body;

        await newRestauranteService.execute({
            name, address, hour_open_week, 
            hour_close_week, hour_open_end_week, 
            hour_close_end_week
        })

        res.json(newRestauranteService);
    }
}

export { NewRestauranteController }
import { Request, Response } from 'express'
import { UpdateRestauranteService } from '../services/UpdateRestauranteService'

class UpdateRestauranteController {
    async handle(req: Request, res: Response) {
        const  { id }  = req.params;
        const {name, address, hour_open_week, hour_close_week, hour_open_end_week, hour_close_end_week} = req.body;

        const updateRestauranteService = new UpdateRestauranteService();

        const updateRestaurante = await updateRestauranteService.execute({
            name, address, hour_open_week, 
            hour_close_week, hour_open_end_week, 
            hour_close_end_week, id
        })

        if(updateRestaurante) res.json({"message": "Restaurante atualizado com sucesso!"})
    }
}

export { UpdateRestauranteController }
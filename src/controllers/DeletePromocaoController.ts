import { Request, Response} from 'express'
import { DeletePromocaoService } from '../services/DeletePromocaoService'

class DeletePromocaoController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const deletePromocaoService = new DeletePromocaoService();

        const deletePromocao = await deletePromocaoService.execute(id);

        if(deletePromocao) res.json({"message": "Promoção deletada!"})
    }
}

export { DeletePromocaoController }
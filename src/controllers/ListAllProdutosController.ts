import { Request, Response } from 'express'
import { ListAllProdutosService } from '../services/ListAllProdutosService'

class ListAllProdutosController {
    async handle(req: Request, res: Response) {
        const { restaurante_id } = req.params;

        const listAllProdutosController = new ListAllProdutosService();
        
        const listProdutos = await listAllProdutosController.execute(restaurante_id);

        res.json(listProdutos)
    }
}

export { ListAllProdutosController }
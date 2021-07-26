import { Request, Response } from 'express'
import { ListAllProdutosService } from '../services/ListAllProdutosService'

class ListAllProdutosController {
    async handle(req: Request, res: Response) {
        const listAllProdutosController = new ListAllProdutosService();
        const listProdutos = await listAllProdutosController.execute();

        res.json(listProdutos)
    }
}

export { ListAllProdutosController }
import { Request, Response } from 'express'
import { DeleteProdutosService } from '../services/DeleteProdutoService'

class DeleteProdutoController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const deleteProdutosService = new DeleteProdutosService();

        const deleteProdutos = await deleteProdutosService.execute(id);

        res.json(deleteProdutos)
    }
}

export { DeleteProdutoController }
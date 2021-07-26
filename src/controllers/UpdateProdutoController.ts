import { Request, Response } from 'express'
import { UpdateProdutoService } from '../services/UpdateProdutoService'

class UpdateProdutoController {
    async handle(req: Request, res: Response) {
        const { name, preco, categoria, id} = req.body;

        const updateProdutoController = new UpdateProdutoService();

        const updateProduto = await updateProdutoController.execute({name, preco, categoria, id});

        res.json(updateProduto)
    }
}

export { UpdateProdutoController }
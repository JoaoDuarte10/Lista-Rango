import { Request, Response } from 'express'
import { NewProdutoService } from '../services/NewProdutoService'

class NewProdutoController {
    async handle(req: Request, res: Response) {
        const { name, preco, categoria } = req.body;

        const newProdutoService = new NewProdutoService();

        const newProduto = await newProdutoService.execute({name, preco, categoria});

        res.json(newProduto)
    }
}

export { NewProdutoController }
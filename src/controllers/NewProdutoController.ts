import { Request, Response } from 'express'
import { NewProdutoService } from '../services/NewProdutoService'

class NewProdutoController {
    async handle(req: Request, res: Response) {
        const { restaurante_id, name, preco, categoria } = req.body;

        const newProdutoService = new NewProdutoService();

        const newProduto = await newProdutoService.execute({restaurante_id, name, preco, categoria});

        if(newProduto) res.json({"message": "Produto salvo com sucesso!"})
    }
}

export { NewProdutoController }
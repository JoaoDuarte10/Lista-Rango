import { Request, Response } from 'express'
import { UpdateProdutoService } from '../services/UpdateProdutoService'

class UpdateProdutoController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { name, preco, categoria } = req.body;

        const updateProdutoController = new UpdateProdutoService();

        const updateProduto = await updateProdutoController.execute({name, preco, categoria, id});

        if(updateProduto) res.json({"message": "Produto atualizado com sucesso!"})
    }
}

export { UpdateProdutoController }
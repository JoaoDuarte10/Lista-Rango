import { Request, Response } from 'express'
import { DeleteProdutosService } from '../services/DeleteProdutoService'

class DeleteProdutoController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const deleteProdutosService = new DeleteProdutosService();

        const deleteProdutos = await deleteProdutosService.execute(id);

        if(deleteProdutos) res.json({"message": "Produto deletado com sucesso!"})
    }
}

export { DeleteProdutoController }
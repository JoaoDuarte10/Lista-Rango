import { Request, Response } from 'express'
import { NewPromocaoService } from '../services/NewPromocaoService'

class NewPromocaoController {
    async handle(req: Request, res: Response) {
        const { produto_id, descricao, preco, dia_inicio_promocao, dia_fim_promocao } = req.body

        const newPromocaoService = new NewPromocaoService();

        const newPromocao = await newPromocaoService.execute({produto_id, descricao, preco, dia_inicio_promocao, dia_fim_promocao});

        if(newPromocao) res.json({"message": "Promoção criada com sucesso!"})
    }
}

export { NewPromocaoController }
import { pool } from "../database/connection";

interface IPromocao {
    produto_id: String;
    descricao: String;
    preco: Float32Array;
    dia_inicio_promocao: Date;
    dia_fim_promocao: Date;
}

class NewPromocaoService {
    async execute({produto_id, descricao, preco, dia_inicio_promocao, dia_fim_promocao}: IPromocao) {
        const sqlPromocao = {
            text: `INSERT INTO promocao(
                produto_id, descricao, preco,
                dia_inicio_promocao, dia_fim_promocao
            ) VALUES ($1, $2, $3, $4, $5)
            `,
            values: [produto_id, descricao, preco, dia_inicio_promocao, dia_fim_promocao]
        }
        const { rows } = await pool.query(sqlPromocao)

        return rows;
    }
}

export { NewPromocaoService }
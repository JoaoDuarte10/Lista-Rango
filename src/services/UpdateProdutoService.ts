import { pool } from "../database/connection";

interface IProduto {
    name: String;
    preco: Float32Array;
    categoria: String;
    id: String;
}

class UpdateProdutoService {
    async execute({name, preco, categoria, id}: IProduto) {
        const sqlProduto = {
            text: `UPDATE produtos SET name=$1, preco=$2, categoria=$3 WHERE id=$4`,
            values: [name, preco, categoria, id]
        }

        const { rows } = await pool.query(sqlProduto);

        return rows
    }
}

export { UpdateProdutoService }
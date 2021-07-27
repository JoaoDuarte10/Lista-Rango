import { pool } from "../database/connection";

interface IProduto {
    restaurante_id: String;
    name: String;
    preco: Float32Array;
    categoria: String;
}

class NewProdutoService {
    async execute({restaurante_id, name, preco, categoria}: IProduto) {
        const sqlProdutos = {
            text: `INSERT INTO produtos(restaurante_id, name, preco, categoria) VALUES($1, $2, $3, $4)`,
            values: [restaurante_id, name, preco, categoria]
        }
        const { rows } = await pool.query(sqlProdutos);

        return rows;
    }
}

export { NewProdutoService }
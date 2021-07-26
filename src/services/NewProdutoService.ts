import { pool } from "../database/connection";

interface IProduto {
    name: String;
    preco: Float32Array;
    categoria: String;
}

class NewProdutoService {
    async execute({name, preco, categoria}: IProduto) {
        const sqlProdutos = {
            text: `INSERT INTO produtos(name, preco, categoria) VALUES($1, $2, $3)`,
            values: [name, preco, categoria]
        }

        const { rows } = await pool.query(sqlProdutos);

        return rows;
    }
}

export { NewProdutoService }
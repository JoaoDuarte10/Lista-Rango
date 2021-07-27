import { pool } from "../database/connection";

class ListAllProdutosService {
    async execute(restaurante_id: String) {
        const sqlProdutos = {
            text: `SELECT * FROM produtos WHERE restaurante_id=$1`,
            values: [restaurante_id]
        };
        
        const { rows } = await pool.query(sqlProdutos)

        return rows;
    }
}

export { ListAllProdutosService }
import { pool } from "../database/connection";

class ListAllProdutosService {
    async execute() {
        const sqlProdutos = `SELECT * FROM produtos`;
        
        const { rows } = await pool.query(sqlProdutos)

        return rows;
    }
}

export { ListAllProdutosService }
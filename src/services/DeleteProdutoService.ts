import { json } from "express";
import { pool } from "../database/connection";

class DeleteProdutosService {
    async execute(id: String) {
        const sqlProdutos = {
            text: `DELETE FROM produtos WHERE id=$1`,
            values: [id]
        }
        const deleteProdutos = await pool.query(sqlProdutos);

        return deleteProdutos.command;
    }
}

export { DeleteProdutosService }
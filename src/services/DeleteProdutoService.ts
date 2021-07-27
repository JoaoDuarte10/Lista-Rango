import { pool } from "../database/connection";

class DeleteProdutosService {
    async execute(id: String) {
        const sqlProdutos = {
            text: `DELETE FROM produtos WHERE id_produtos=$1`,
            values: [id]
        }
        const deleteProdutos = await pool.query(sqlProdutos);

        return deleteProdutos;
    }
}

export { DeleteProdutosService }
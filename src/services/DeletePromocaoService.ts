import { pool } from "../database/connection";

class DeletePromocaoService {
    async execute(id: String) {
        const sqlPromocao = {
            text: `DELETE FROM promocao WHERE id_promocao=$1`,
            values: [id]
        }
        const deletePromocao = await pool.query(sqlPromocao);

        return deletePromocao;
    }
}

export { DeletePromocaoService }
import { pool } from "../database/connection";

class ListAllPromocoesService {
    async execute() {
        const sqlPromocao = `SELECT * FROM promocao`

        const { rows } =await pool.query(sqlPromocao);

        return rows;
    }
}

export { ListAllPromocoesService }
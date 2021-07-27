import { pool } from "../database/connection";

class ListRestauranteService {
    async execute(id: String) {
        const sqlRestaurante = {
            text: `SELECT * FROM restaurante WHERE id_restaurante=$1`,
            values: [id],
        }
        const {rows} = await pool.query(sqlRestaurante)

        return rows;
    }
}

export { ListRestauranteService }
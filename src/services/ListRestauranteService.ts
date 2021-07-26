import { pool } from "../database/connection";

class ListRestauranteService {
    async execute(id: String) {
        const sqlRestaurante = {
            text: `SELECT * FROM restaurante WHERE id=$1`,
            values: [id],
        }

        //const {fields} = await pool.query(sqlRestaurante)

        const {rows} = await pool.query(sqlRestaurante)

        return rows;
    }
}

export { ListRestauranteService }
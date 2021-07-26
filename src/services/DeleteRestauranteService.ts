import { pool } from "../database/connection";

class DeleteRestauranteService {
    async execute(id: String) {
        const sqlRestaurante = {
            text: `DELETE FROM restaurante WHERE id=$1`,
            values: [id]
        }

        const deleteRestaurante = pool.query(sqlRestaurante)

        return deleteRestaurante
    }
}

export { DeleteRestauranteService }
import { pool } from '../database/connection'

class ListAllRestaurantesService {
    async execute() {
        const sqlRestaurante = `SELECT name FROM restaurante`;
        
        const { rows } = await pool.query(sqlRestaurante)

        return rows;
    }
}

export { ListAllRestaurantesService }
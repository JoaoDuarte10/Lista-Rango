import { pool } from "../database/connection";

interface IUpdate {
    name: string;
    address: string;
    hour_open_week: Date;
    hour_close_week: Date;
    hour_open_end_week: Date;
    hour_close_end_week: Date;
    id: String;
}

class UpdateRestauranteService {
    async execute({
        name, address, hour_open_week, 
        hour_close_week, hour_open_end_week, 
        hour_close_end_week, id
    }: IUpdate) {
        const sqlRestaurante = {
            text: `UPDATE restaurante 
            SET name=$1, 
            address=$2, 
            hour_open_week=$3, 
            hour_close_week=$4, 
            hour_open_end_week=$5, 
            hour_close_end_week=$6
            WHERE id=$7`,
            values: [
                name, address, hour_open_week, 
                hour_close_week, hour_open_end_week, 
                hour_close_end_week, id
            ]
        }

        const { rows } = await pool.query(sqlRestaurante)

        return rows;
    }
}

export { UpdateRestauranteService }
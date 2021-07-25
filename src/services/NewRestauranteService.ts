import { json } from "express";
import { pool } from "../database/connection";

interface IRestaurante {
    name: string;
    address: string;
    hour_open_week: Date;
    hour_close_week: Date;
    hour_open_end_week: Date;
    hour_close_end_week: Date;
}

class NewRestauranteService {
    async execute({
        name, address, hour_open_week, 
        hour_close_week, hour_open_end_week, 
        hour_close_end_week
    }: IRestaurante) {

        const sqlRestaurante = { 
            text: `INSERT INTO restaurante(name, 
                    address, hour_open_week, 
                    hour_close_week, hour_open_end_week, 
                    hour_close_end_week
                ) VALUES($1, $2, $3, $4, $5, $6)`,
            values: [name, address, hour_open_week, hour_close_week, hour_open_end_week, hour_close_end_week]
        };
        
        const { rows } = await pool.query(sqlRestaurante);

        return rows;
        
    }
}

export { NewRestauranteService }
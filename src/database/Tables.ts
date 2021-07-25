import { pool } from './connection'

class Tables {
    async createTables(){

        const createTableRestaurante = `
        CREATE EXTENSION IF NOT EXISTS "pgcrypto";
    
        CREATE TABLE IF NOT EXISTS restaurante (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
            name varchar(256) NOT NULL,
            address varchar(256) NOT NULL,
            hour_open_week TIME, 
            hour_close_week TIME, 
            hour_open_end_week TIME, 
            hour_close_end_week TIME
        )
        `;
    
        const createTableProdutos = `
        CREATE EXTENSION IF NOT EXISTS "pgcrypto";
    
        CREATE TABLE IF NOT EXISTS produtos (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name varchar(256) NOT NULL,
            preco float NOT NULL,
            categoria varchar(256) NOT NULL
        )
        `;
    
        pool.query(createTableRestaurante, (err, res)=>{
            console.log(err, res);
        });
    
        pool.query(createTableProdutos, (err, res)=>{
            console.log(err, res);
            pool.end();
        })
    
    }
}

export { Tables }
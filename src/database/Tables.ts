import { pool } from './connection'

class Tables {
    async createTables(){

        const createTableRestaurante = `
        CREATE EXTENSION IF NOT EXISTS "pgcrypto";
    
        CREATE TABLE IF NOT EXISTS restaurante (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
            name varchar(256) NOT NULL,
            address varchar(256) NOT NULL,
            hour_open_week TIME NOT NULL, 
            hour_close_week TIME NOT NULL, 
            hour_open_end_week TIME NOT NULL, 
            hour_close_end_week TIME NOT NULL
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
    
        pool.query(createTableRestaurante, (err)=>{
            if(err) console.log(err)
        });
    
        pool.query(createTableProdutos, (err, res)=>{
            if(err) console.log(err)
        }) 
    }
}

export { Tables }
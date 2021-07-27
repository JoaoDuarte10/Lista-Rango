import { pool } from './connection'

class Tables {

    async createTabelas() {

        const Tabelas = `
        CREATE EXTENSION IF NOT EXISTS "pgcrypto";
    
        CREATE TABLE IF NOT EXISTS restaurante (
            id_restaurante UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
            name varchar(256) NOT NULL,
            address varchar(256) NOT NULL,
            hour_open_week TIME NOT NULL, 
            hour_close_week TIME NOT NULL, 
            hour_open_end_week TIME NOT NULL, 
            hour_close_end_week TIME NOT NULL
        );
        CREATE TABLE IF NOT EXISTS produtos (
            id_produto UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            restaurante_id UUID,
            name varchar(256) NOT NULL,
            preco float NOT NULL,
            categoria varchar(256) NOT NULL,
                FOREIGN KEY(restaurante_id)
                    REFERENCES restaurante(id_restaurante)
                    ON DELETE SET NULL
        );
        CREATE TABLE IF NOT EXISTS promocao (
            id_promocao UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            produto_id UUID,
            descricao varchar(256) NOT NULL,
            preco float NOT NULL,
            dia_inicio_promocao date NOT NULL,
            dia_fim_promocao date NOT NULL,
                FOREIGN KEY(produto_id)
                REFERENCES produtos(id_produto)
                ON DELETE SET NULL
        );
        `;

        pool.query(Tabelas, (err)=>{
            if(err) console.log(err)
        })
    }
}

export { Tables }
import { Pool } from 'pg';

const pool  = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'goomer-lista-rango',
    password: '123456',
    port: 5432
})

export { pool };
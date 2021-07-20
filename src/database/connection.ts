import { Pool } from 'pg';

export default new Pool({
    user: 'admin',
    host: 'db_postgres',
    database: 'goomer-lista-rango',
    password: '123456',
    port: 5432
})
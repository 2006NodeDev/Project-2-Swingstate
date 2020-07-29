import { Pool } from 'pg'

export const connectionPool:Pool = new Pool({
    host: process.env['LB_ADDRESS'],
    user: process.env['LB_USERNAME'],
    password: process.env['LB_PASSWORD'],
    database: process.env['LB_DATABASE'],
    port:5432,
    max:5
})
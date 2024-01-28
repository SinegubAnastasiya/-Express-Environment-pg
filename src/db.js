const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    password: 'Ap3442628',
    user: 'postgres',
    database: 'skills_'
})

module.exports = pool
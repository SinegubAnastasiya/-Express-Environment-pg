// const { Pool } = require('pg')

// const pool = new Pool({
//     host: 'localhost',
//     port: '5432',
//     password: 'Ap3442628',
//     user: 'postgres',
//     database: 'skills_'
// })

// module.exports = pool

const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'kitten1998',
    database: 'skills',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = pool.promise()